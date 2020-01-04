import { useState, useEffect, MouseEvent } from 'react';
import Presenter from './blogPresenter';
import { IPost, IPropsCompBlog } from '../../types';
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

const interactor = (props: IPropsCompBlog) => {
  const [posts, setPosts] = useState<Array<IPost>>(props.posts);
  const addPosts = () => {
    const dummpyPosts: Array<IPost> = [...posts];
    for (let i = posts.length; i < posts.length + 10; i++) dummpyPosts[i] = getDummy(i.toString());
    setPosts(dummpyPosts);
  };
  const onMoreClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPosts();
  };
  useEffect(() => addPosts(), []);
  return <Presenter posts={posts} onMoreClicked={onMoreClicked} />;
};

export default interactor;
