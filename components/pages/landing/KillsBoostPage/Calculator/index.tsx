import styles from './Calculator.module.scss';
import {killsCountChanged, platformChanged, killsStore$, regionChanged} from '../model';
import React from 'react';
import {useStore} from 'effector-react';
import {ApexPlatformEnum, ApexRegionEnum} from 'types/Apex';

export const KillsBoostCalculator = () => {
    const state = useStore(killsStore$);

    const countChanged = (value: string | number) => {
        if (isNaN(+value)) {
            killsCountChanged(0);
            return;
        }
        if (+value < 0) {
            killsCountChanged(0);
            return;
        }
        if (+value > 1000) {
            killsCountChanged(1000);
            return;
        }
        killsCountChanged(+value);
    };

    return (
        <div className={styles.calcContainer}>
            <div className={styles.platformSelector}>
                <p className={styles.label}>Platform</p>
                <select
                    value={state.platform}
                    onChange={(e) => platformChanged(e.target.value as ApexPlatformEnum)}
                    data-cy="platform-selector"
                >
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="XBOX">Xbox</option>
                </select>
            </div>
            <div className={styles.ranksContainer}>
                <div className={styles.rank}>
                    <h3>Kills count</h3>
                    <div className={styles.rankItem}>
                        <button
                            className={styles.rankInputBtn}
                            data-cy="minus_cur_rank_btn"
                            onClick={() => countChanged(state.killsCount - 50)}
                        >
                            -
                        </button>
                        <input
                            className={styles.rankInput}
                            type="text"
                            onChange={({target: {value}}) => {
                                countChanged(value);
                            }}
                            value={state.killsCount}
                            data-cy="division-from-input"
                        />
                        <button
                            className={styles.rankInputBtn}
                            data-cy="plus_cur_rank_btn"
                            onClick={() => countChanged(state.killsCount + 50)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.platformSelector}>
                <p className={styles.label}>Region</p>
                <select
                    value={state.region}
                    onChange={(e) => regionChanged(e.target.value as ApexRegionEnum)}
                    data-cy="region-selector"
                >
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
};
