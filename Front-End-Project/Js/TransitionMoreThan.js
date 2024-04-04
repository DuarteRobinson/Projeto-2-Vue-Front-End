import FrameComponent from "../components/FrameComponent";
import Games from "../components/Games";
import Discover from "./components/Discover";
import Create from "../components/Create";
import styles from "@css/TransitionMoreThan.module.css";

const TransitionMoreThan = () => {
  return (
    <div className={styles.transitionMoreThan}>
      <img className={styles.logoBgIcon} alt="" src="/logo-bg@2x.png" />
      <div className={styles.bg} />
      <img
        className={styles.logoEpc1}
        loading="lazy"
        alt=""
        src="/logo-epc-11@2x.png"
      />
      <FrameComponent />
      <div className={styles.transitionMoreThanInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <div className={styles.gamesWrapper}>
              <Games />
            </div>
            <Discover />
          </div>
          <Create1 />
        </div>
      </div>
    </div>
  );
};