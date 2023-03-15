import styles from "./styles.module.scss"

const Legend = () => (
  <div className={styles.legend}>
    <div data-type="Income">Income</div>
    <div data-type="Outcome">Outcome</div>
  </div>
);

export default Legend;
