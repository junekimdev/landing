import styles from './features.module.scss';

const view = (props: { image: string; title: string; content: string | JSX.Element }) => {
  const { title, content, image } = props;

  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.desc}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default view;
