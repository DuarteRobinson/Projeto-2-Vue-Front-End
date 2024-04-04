import Container from "@css/components/Container";
import styles from "@css/Default.module.css";

const Default = () => {
  return (
    <div className={styles.default}>
      <img className={styles.logoBgIcon} alt="" src="/logo-bg@2x.png" />
      <div className={styles.bg} />
      <img
        className={styles.logoEpc1}
        loading="lazy"
        alt=""
        src="/logo-epc-1@2x.png"
      />
      <Container />
    </div>
  );
};

export default Default;