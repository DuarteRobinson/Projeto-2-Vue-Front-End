import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "@css/Container.module.css";

const Container = () => {
  const navigate = useNavigate();

  const onMoreThanDefaultContainerClick = useCallback(() => {
    navigate("/transition-more-than");
  }, [navigate]);

  return (
    <header className={styles.container}>
      <div className={styles.navbar} />
      <div className={styles.moreThanDefault}>
        <div
          className={styles.moreThandefault}
          onClick={onMoreThanDefaultContainerClick}
        >
          <img
            className={styles.moreThanIcon}
            loading="lazy"
            alt=""
            src="/more-than@2x.png"
          />
        </div>
      </div>
      <div className={styles.containerInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.maleUserBox}></div>