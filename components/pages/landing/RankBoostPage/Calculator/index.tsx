import styles from './RankBoostCalc.module.scss';
import {fromRankChanged, platformChanged, rankStore$, toRankChanged} from '../model';
import {getDevisionString} from '../utils';
import React from 'react';
import {useStore} from 'effector-react';
import { PlatformEnum } from '../../../../../types/ApexRank';

const RankIcon: React.FC<{rank: number; width: number}> = ({rank, width}) => {
    const style = {width: `${width}px`, height: `${width}px`};
    const Img = ({src}: {src: string}) => (
        <img className={styles.rankImg} src={src} alt="Rank icon" style={style} />
    );

    if (rank < 1200) {
        return <Img src="/ranks/1.png" />;
    } else if (rank >= 1200 && rank < 2800) {
        return <Img src="/ranks/2.png" />;
    } else if (rank >= 2800 && rank < 4800) {
        return <Img src="/ranks/3.png" />;
    } else if (rank >= 4800 && rank < 7200) {
        return <Img src="/ranks/4.png" />;
    } else if (rank >= 7200 && rank < 10000) {
        return <Img src="/ranks/5.png" />;
    }
    return <Img src="/ranks/6.png" />;
};

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
                    onChange={(e) => platformChanged(e.target.value as PlatformEnum)}
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
        </div>
    );
};
