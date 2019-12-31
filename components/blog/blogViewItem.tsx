import Link from 'next/link';

export interface IPost {
  id: string;
  title: string;
  time: string;
  image?: string;
  body: string | JSX.Element;
}

const view = (props: { post: IPost }) => {
  const { id, title, time, image, body } = props.post;
  const datifyTime = new Date(time);
  const day = datifyTime.getDate();
  const dd = day < 10 ? `0${day}` : day.toString();
  const month = datifyTime.getMonth() + 1;
  const mm = month < 10 ? `0${month}` : month.toString();
  const yyyy = datifyTime.getFullYear();
  let hh = datifyTime.getHours() % 12;
  hh = hh === 0 ? 12 : hh;
  const clockCode = String.fromCodePoint(0x1f54f + hh); // This gives clock unicode (1h~12h)

  return (
    <article className="item">
      <h1 className="item__title">
        <Link href={`/blog/${id}?title=${title}`} as={`/blog/${id}?title=${title}`}>
          <a>{title}</a>
        </Link>
      </h1>
      <time className="item__time" dateTime={datifyTime.toISOString()}>
        {`${clockCode} ${yyyy}.${mm}.${dd}`}
      </time>
      {image && <img src={image} alt="Featured image" className="item__img" />}
      <div className="item__body">{body}</div>
    </article>
  );
};

export default view;
