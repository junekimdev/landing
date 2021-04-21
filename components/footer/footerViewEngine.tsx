import styles from './footer.module.scss';

const view = () => {
  return (
    <small className={styles.engine}>
      <span>Powered by</span>
      <img src="/assets/junekim_192x192.png" alt="Developer logo" className={styles.logo} />
      <span>
        <a href="https://github.com/JuneKimDev" rel="noopener">
          June Kim
        </a>
      </span>
    </small>
  );
};

export default view;
