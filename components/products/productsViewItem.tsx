import styles from './products.module.scss';

const view = (props: {
  imgSrc: string;
  imgDesc: string;
  descTitle: string;
  descContent: string | JSX.Element;
}) => {
  const { imgSrc, imgDesc, descTitle, descContent } = props;
  return (
    <div className={styles.item}>
      <img src={imgSrc} alt={imgDesc} />
      <div className={styles.card}>
        <h1 className={styles.title}>{descTitle}</h1>
        <p className={styles.content}>{descContent}</p>
      </div>
    </div>
  );
};

export default view;
