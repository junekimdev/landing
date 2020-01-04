import { MouseEvent, Fragment } from 'react';
import './blog.scss';
import { IPost } from '../../types';
import Item from './blogViewItem';

const presenter = (props: {
  posts: Array<IPost>;
  onMoreClicked: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { posts, onMoreClicked } = props;
  const articleMapper = (post: IPost) => (
    <Fragment key={post.id}>
      <Item post={post} />
      <hr />
    </Fragment>
  );

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__header">
          <img
            src={`//unsplash.it/1200/180?random=${Math.random()}`}
            alt="Blog featured image"
            className="blog__featured-img"
            id="blog__featured-img"
          />
        </div>
        <div className="blog__posts">{posts.map(articleMapper)}</div>
        <button className="blog__more btn" onClick={onMoreClicked}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default presenter;
