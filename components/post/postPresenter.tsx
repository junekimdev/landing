import styles from './post.module.scss';
import { IPost } from '../../types';

const presenter = (props: { post: IPost }) => {
  const { id, title, time, image, body } = props.post;
  const datifyTime = new Date(time);
  let hh = datifyTime.getHours() % 12;
  hh = hh === 0 ? 12 : hh;
  const clockCode = String.fromCodePoint(0x1f54f + hh); // This gives clock unicode (1h~12h)
  const bodyMapper = (text: string) => <p key={`${id}-${text}`}>{text}</p>;

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        {image && <img src={image} alt="Featured image" />}
        <article>
          <h1>{title}</h1>
          <time dateTime={datifyTime.toISOString()}>
            {`${clockCode} ${datifyTime.toLocaleString()}`}
          </time>
          <div className={styles.body}>{body.map(bodyMapper)}</div>
        </article>
      </div>
    </section>
  );
};

export default presenter;
