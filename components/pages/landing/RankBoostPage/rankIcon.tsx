import React from "react";
import styles from "components/pages/landing/RankBoostPage/Calculator/RankBoostCalc.module.scss";

export const RankIcon: React.FC<{rank: number; width: number}> = ({rank, width}) => {
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
