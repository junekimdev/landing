import './post.scss';
import { IPropsCompPost } from '../../types';

const presenter = (props: IPropsCompPost) => {
  const { id, title, time, image, body } = props.post;
  const datifyTime = new Date(time);
  let hh = datifyTime.getHours() % 12;
  hh = hh === 0 ? 12 : hh;
  const clockCode = String.fromCodePoint(0x1f54f + hh); // This gives clock unicode (1h~12h)
  const bodyMapper = (text: string) => <p key={`${id}-${text}`}>{text}</p>;

  return (
    <section className="post">
      <div className="post__container">
        {image && <img src={image} alt="Featured image" className="post__img" />}
        <article className="post__article">
          <h1 className="post__title">{title}</h1>
          <time className="post__time" dateTime={datifyTime.toISOString()}>
            {`${clockCode} ${datifyTime.toLocaleString()}`}
          </time>
          <div className="post__body">{body.map(bodyMapper)}</div>
        </article>
      </div>
    </section>
  );
};

export default presenter;
