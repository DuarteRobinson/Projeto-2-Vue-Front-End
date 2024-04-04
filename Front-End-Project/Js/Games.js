import styles from "@css/Games.module.css";

const Games = () => {
    return (
        <div className={styles.games}>
            <div className={styles.frameParent}>
                <div className={styles.gamesWrapper}>
                    <h2 className={styles.games1}>Games</h2>
                </div>
                <div className={styles.createAreaBoxParent}>
                    <img
                        className={styles.createAreaBox}
                        loading="lazy"
                        alt=""
                        src="/line-4.svg"
                    />
                    <div className={styles.realityEngineBox}>
                        <div className={styles.fortniteParent}>
                            <img
                                className={styles.fortniteIcon}
                                loading="lazy"
                                alt=""
                                src="/fortnite@2x.png"
                            />
                            <div className={styles.fortniteWrapper}>
                                <div className={styles.fortnite}>Fortnite</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gamesInner}>
                <div className={styles.rocketLeagueParent}>
                    <img
                        className={styles.rocketLeagueIcon}
                        loading="lazy"
                        alt=""
                        src="/rocket-league@2x.png"
                    />
                    <div className={styles.rocketLeagueWrapper}>
                        <div className={styles.rocketLeague}>Rocket League</div>
                    </div>
                </div>
            </div>
            <div className={styles.gamesChild}>
                <div className={styles.fallGuysParent}>
                    <img
                        className={styles.fallGuysIcon}
                        loading="lazy"
                        alt=""
                        src="/fall-guys@2x.png"
                    />
                    <div className={styles.fallGuysWrapper}>
                        <div className={styles.fallGuys}>Fall Guys</div>
                    </div>
                </div>
            </div>
        </div>
    );
};