import styles from "@css/Discover.module.css";

const Discover = () => {
    return (
        <div className={styles.discover}>
            <div className={styles.storeLabelParent}>
                <div className={styles.storeLabel}>
                    <h2 className={styles.discover1}>Discover</h2>
                </div>
                <div className={styles.lineParent}>
                    <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/line-5.svg"
                    />
                    <div className={styles.frameWrapper}>
                        <div className={styles.frameParent}>
                            <div className={styles.epicGamesParent}>
                                <img
                                    className={styles.epicGamesIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/epic-games@2x.png"
                                />
                                <div className={styles.epicGamesStoreWrapper}>
                                    <div className={styles.epicGamesStore}>Epic Games Store</div>
                                </div>
                            </div>
                            <div className={styles.epicGamesGroup}>
                                <img
                                    className={styles.epicGamesIcon1}
                                    alt=""
                                    src="/epic-games-1@2x.png"
                                />
                                <div className={styles.fabWrapper}>
                                    <div className={styles.fab}>Fab</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.discoverInner}>
                <div className={styles.sketchfabParent}>
                    <img
                        className={styles.sketchfabIcon}
                        loading="lazy"
                        alt=""
                        src="/sketchfab@2x.png"
                    />
                    <div className={styles.sketchfabWrapper}>
                        <div className={styles.sketchfab}>Sketchfab</div>
                    </div>
                </div>
            </div>
            <div className={styles.discoverChild}>
                <div className={styles.artstationParent}>
                    <img
                        className={styles.artstationIcon}
                        loading="lazy"
                        alt=""
                        src="/artstation@2x.png"
                    />
                    <div className={styles.artstationWrapper}>
                        <div className={styles.artstation}>ArtStation</div>
                    </div>
                </div>
            </div>
        </div>