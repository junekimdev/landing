import './post.scss';
import { IPost } from '../blog/blogViewItem';

const presenter = (props: { post: IPost }) => {
  const { title, time, image, body } = props.post;
  const datifyTime = new Date(time);
  let hh = datifyTime.getHours() % 12;
  hh = hh === 0 ? 12 : hh;
  const clockCode = String.fromCodePoint(0x1f54f + hh); // This gives clock unicode (1h~12h)

  return (
    <section className="post">
      <div className="post__container">
        {image && <img src={image} alt="Featured image" className="post__img" />}
        <article className="post__article">
          <h1 className="post__title">{title}</h1>
          <time className="post__time" dateTime={datifyTime.toISOString()}>
            {`${clockCode} ${datifyTime.toLocaleString()}`}
          </time>
          <div className="post__body">{body}</div>
        </article>
      </div>
    </section>
  );
};

export default presenter;
