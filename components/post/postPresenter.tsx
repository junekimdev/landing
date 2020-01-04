import './post.scss';
import { IPost, IPropsCompPost } from '../../types';

const dummyBody = (
  <>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur voluptatibus nulla
      aliquid odit, deserunt temporibus voluptates, perspiciatis autem, cum vitae nisi possimus
      labore explicabo itaque! Exercitationem obcaecati consectetur qui.
    </p>
    <p>
      Reprehenderit officiis perferendis magni eos vel at ipsum ad distinctio, inventore amet
      quaerat non illo? Et ipsum qui, libero deleniti ut, reiciendis beatae ex quidem dolores eum
      facilis itaque nulla.
    </p>
    <p>
      Excepturi tempore enim consequatur laudantium iusto quaerat fugit explicabo expedita.
      Architecto iste eos repellendus exercitationem, doloremque obcaecati quos molestiae
      reprehenderit, amet, non perferendis. Eum eveniet iure dolorum qui ipsa adipisci!
    </p>
  </>
);

export const getDummy: (id: string) => IPost = id => ({
  id,
  title: 'Hello World! This is June',
  time: new Date().toISOString(),
  image: `//unsplash.it/600/300?random=${Math.random()}`,
  imageWidth: '600',
  imageHeight: '300',
  body: dummyBody,
});

const presenter = (props: IPropsCompPost) => {
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
