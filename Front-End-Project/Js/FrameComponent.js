import styles from "@css/FrameComponent.module.css";

const FrameComponent = () => {
    return (
        <header className={styles.moreThanIndicator}>
            <div className={styles.navbar} />
            <div className={styles.moreThanvariant2Wrapper}>
                <img
                    className={styles.moreThanvariant2Icon}
                    loading="lazy"
                    alt=""
                    src="/more-thanvariant2@2x.png"
                />
            </div>
            <div className={styles.moreThanIndicatorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.storeParent}>
                <h2 className={styles.store}>Store</h2>
                <div className={styles.suporteWrapper}>
                    <div className={styles.suporte}>Suporte</div>
                </div>
                <div className={styles.helpWrapper}>
                    <div className={styles.help}>Help</div>
                </div>
                <div className={styles.aboutUsWrapper}>
                    <div className={styles.aboutUs}>About us</div>
                </div>
            </div>
            <div className={styles.maleUserWrapper}>
                <img
                    className={styles.maleUserIcon}
                    loading="lazy"
                    alt=""
                    src="/male-user1@2x.png"
                />
            </div>
            <div className={styles.unrealEngineBox}>
                <img
                    className={styles.unrealEngineBoxChild}
                    loading="lazy"
                    alt=""
                    src="/line-31.svg"
                />
            </div>
            <div className={styles.shoppingCartWrapper}>
                <img
                    className={styles.shoppingCartIcon}
                    loading="lazy"
                    alt=""
                    src="/shopping-cart1@2x.png"
                />
            </div>
        </header>
    );
};