import styles from './RankBoostCalc.module.scss';
import {fromRankChanged, platformChanged, rankStore$, regionChanged, toRankChanged} from '../model';
import {getDevisionString} from '../utils';
import React from 'react';
import {useStore} from 'effector-react';
import {ApexPlatformEnum, ApexRegionEnum} from 'types/Apex';
import {RankIcon} from "components/pages/landing/RankBoostPage/rankIcon";

export const RankBoostCalculator = () => {
    const state = useStore(rankStore$);

    const fromChanged = (value: string | number) => {
        if (isNaN(+value)) {
            fromRankChanged(0);
            return;
        }
        if (+value < 0) {
            fromRankChanged(0);
            return;
        }
        if (+value > 20000) {
            fromRankChanged(20000);
            return;
        }
        fromRankChanged(+value);
    };

    const toChanged = (value: string | number) => {
        if (isNaN(+value)) {
            toRankChanged(0);
            return;
        }
        if (+value < 0) {
            toRankChanged(0);
            return;
        }
        if (+value > 20000) {
            toRankChanged(20000);
            return;
        }
        toRankChanged(+value);
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
                    <RankIcon rank={state.from} width={60} />
                    <h3>Current Rank</h3>
                    <div className={styles.rankItem}>
                        <button
                            className={styles.rankInputBtn}
                            data-cy="minus_cur_rank_btn"
                            onClick={() => fromChanged(state.from - 100)}
                        >
                            -
                        </button>
                        <input
                            className={styles.rankInput}
                            type="text"
                            onChange={({target: {value}}) => {
                                fromChanged(value);
                            }}
                            value={state.from}
                            data-cy="division-from-input"
                        />
                        <button
                            className={styles.rankInputBtn}
                            data-cy="plus_cur_rank_btn"
                            onClick={() => fromChanged(state.from + 100)}
                        >
                            +
                        </button>
                    </div>
                    <div className={styles.divisionBlock}>
                        <p>{getDevisionString(state.from)}</p>
                    </div>
                </div>
                <div className={styles.rank}>
                    <RankIcon rank={state.to} width={60} />
                    <h3>Desired Rank</h3>
                    <div className={styles.rankItem}>
                        <button
                            className={styles.rankInputBtn}
                            data-cy="minus_desired_rank_btn"
                            onClick={() => toChanged(state.to - 100)}
                        >
                            -
                        </button>
                        <input
                            className={styles.rankInput}
                            type="text"
                            onChange={({target: {value}}) => {
                                toChanged(value);
                            }}
                            value={state.to}
                            data-cy="division-to-input"
                        />
                        <button
                            className={styles.rankInputBtn}
                            data-cy="plus_desired_rank_btn"
                            onClick={() => toChanged(state.to + 100)}
                        >
                            +
                        </button>
                    </div>
                    <div className={styles.divisionBlock}>
                        <p data-cy="division-to-p">{getDevisionString(state.to)}</p>
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
