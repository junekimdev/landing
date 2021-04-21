import styles from './about.module.scss';

const view = (props: { image: string; title: string; desc: string | JSX.Element }) => {
  const { image, title, desc } = props;

  return (
    <div className={styles.person}>
      <img src={image} alt={`picture of ${title}`} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default view;
