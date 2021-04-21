import styles from './about.module.scss';

const view = (props: { logo: string; desc: string | JSX.Element }) => {
  const { logo, desc } = props;
  return (
    <div className={styles.brand}>
      <img src={logo} alt="company logo" className={styles.logo} />
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default view;
