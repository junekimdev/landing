import Presenter from './postPresenter';
import { IPost } from '../blog/blogViewItem';
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
const getDummy: (id: string) => IPost = id => ({
  id,
  title: 'Hello World! This is June',
  time: new Date().toISOString(),
  image: `//unsplash.it/600/300?random=${Math.random()}`,
  body: dummyBody,
});

const interactor = (props: { id: string }) => {
  const { id } = props;
  let post = getDummy(id);
  return <Presenter post={post} />;
};

export default interactor;
