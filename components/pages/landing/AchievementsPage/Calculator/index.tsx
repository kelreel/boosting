import styles from './Calculator.module.scss';
import {badgesChanged, badgesStore$, platformChanged, regionChanged} from '../model';
import React from 'react';
import {useStore} from 'effector-react';
import {ApexPlatformEnum, ApexRegionEnum} from 'types/Apex';
import {Badges} from 'types/Apex/badges';

export const BadgesCalculator = () => {
    const state = useStore(badgesStore$);

    return (
        <div className={styles.calcContainer}>
            <div className={styles.meta}>
                <div className={styles.selectable}>
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
                <div className={styles.selectable}>
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
            <div className={styles.badgesContainer}>
                {Badges.map((badge) => (
                    <div key={badge.id} className={styles.badge}>
                        <div
                            className={styles.control}
                            onClick={() => {
                                const checked = state.badges.some((item) => item.id === badge.id);
                                if (checked) {
                                    badgesChanged([
                                        ...state.badges.filter((item) => item.id !== badge.id),
                                    ]);
                                } else {
                                    badgesChanged([...state.badges, badge]);
                                }
                            }}
                        >
                            <input
                                checked={state.badges.some((item) => item.id === badge.id)}
                                type="checkbox"
                                readOnly={true}
                                // onChange={(e) => e.preventDefault()}
                            />{' '}
                            {badge.name}
                        </div>
                        <div className={styles.price}>${badge.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
