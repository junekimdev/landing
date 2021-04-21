import { MouseEvent, Fragment } from 'react';
import styles from './blog.module.scss';
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
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={`//unsplash.it/1200/180?random=${Math.random()}`}
            alt="Blog featured image"
            id="blog__featured-img"
          />
        </div>
        <div className={styles.posts}>{posts.map(articleMapper)}</div>
        <button className={styles.more_btn} onClick={onMoreClicked}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default presenter;
