import styles from './footer.module.scss';

const view = (props: { image: string; name: string }) => {
  const { image, name } = props;
  return (
    <div className={styles.brand}>
      <img src={image} alt="Brand logo" className={styles.logo} />
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};

export default view;
