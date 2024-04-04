import styles from "@css/Create1.module.css";

const Create = () => {
    return (
        <div className={styles.create}>
            <div className={styles.frameParent}>
                <div className={styles.createWrapper}>
                    <h2 className={styles.create1}>Create</h2>
                </div>
                <div className={styles.lineParent}>
                    <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/line-6.svg"
                    />
                    <div className={styles.frameWrapper}>
                        <div className={styles.unrealEngineParent}>
                            <img
                                className={styles.unrealEngineIcon}
                                loading="lazy"
                                alt=""
                                src="/unreal-engine@2x.png"
                            />
                            <div className={styles.unrealEngineWrapper}>
                                <div className={styles.unrealEngine}>Unreal Engine</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.createInner}>
                <div className={styles.fortniteParent}>
                    <img
                        className={styles.fortniteIcon}
                        alt=""
                        src="/fortnite-1@2x.png"
                    />
                    <div className={styles.createInFortniteWrapper}>
                        <div className={styles.createInFortnite}>Create in Fortnite</div>
                    </div>
                </div>
            </div>
            <div className={styles.createChild}>
                <div className={styles.epicGamesParent}>
                    <img
                        className={styles.epicGamesIcon}
                        alt=""
                        src="/epic-games-2@2x.png"
                    />
                    <div className={styles.metahumanWrapper}>
                        <div className={styles.metahuman}>MetaHuman</div>
                    </div>
                </div>
            </div>
            <div className={styles.frameDiv}>
                <div className={styles.epicGamesGroup}>
                    <img
                        className={styles.epicGamesIcon1}
                        alt=""
                        src="/epic-games-3@2x.png"
                    />
                    <div className={styles.twinmotionWrapper}>
                        <div className={styles.twinmotion}>TwinMotion</div>
                    </div>
                </div>
            </div>
            <div className={styles.realitycapture}>RealityCapture</div>
            <div className={styles.createInner1}>
                <div className={styles.epicGamesContainer}>
                    <img
                        className={styles.epicGamesIcon2}
                        alt=""
                        src="/epic-games-4@2x.png"
                    />
                    <div className={styles.realityscanWrapper}>
                        <div className={styles.realityscan}>RealityScan</div>
                    </div>
                </div>
            </div>
            <div className={styles.createInner2}>
                <div className={styles.frameGroup}>
                    <div className={styles.epicGamesParent1}>
                        <img
                            className={styles.epicGamesIcon3}
                            alt=""
                            src="/epic-games-5@2x.png"
                        />
                        <div className={styles.realitycaptureWrapper}>
                            <div className={styles.realitycapture1}>RealityCapture</div>
                        </div>
                    </div>
                    <div className={styles.epicGamesParent2}>
                        <img
                            className={styles.epicGamesIcon4}
                            alt=""
                            src="/epic-games-6@2x.png"
                        />
                        <div className={styles.epicGamesServicesWrapper}>
                            <div className={styles.epicGamesServices}>
                                Epic Games Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.createInner3}>
                <div className={styles.epicGamesParent3}>
                    <img
                        className={styles.epicGamesIcon5}
                        alt=""
                        src="/epic-games-7@2x.png"
                    />
                    <div className={styles.publishInEpicGamesStoreWrapper}>
                        <div className={styles.publishInEpic}>
                            Publish in Epic Games Store
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.createInner4}>
                <div className={styles.servicesParent}>
                    <img
                        className={styles.servicesIcon}
                        loading="lazy"
                        alt=""
                        src="/services@2x.png"
                    />
                    <div className={styles.kidsWebServicesWrapper}>
                        <div className={styles.kidsWebServices}>Kids Web Services</div>
                    </div>
                </div>
            </div>
            <div className={styles.createInner5}>
                <div className={styles.epicGamesParent4}>
                    <img
                        className={styles.epicGamesIcon6}
                        alt=""
                        src="/epic-games-8@2x.png"
                    />
                    <div className={styles.developerCommunityWrapper}>
                        <div className={styles.developerCommunity}>Developer Community</div>
                    </div>
                </div>
            </div>
        </div>
    );
};