import { useEffect } from 'react';
import { NextPage } from 'next';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Post, { getDummy } from '../../components/post';
import { IPropsPagePost, IPost } from '../../types';

const page: NextPage<IPropsPagePost> = props => {
  const { pathname, query, post } = props;
  const { postId, title } = query;
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title={`${title} | Landing Page Template`}
        desc={`${title} | Landing Page Template`}
        url={`${publicUrl}/blog/${postId}?title=${title}`}
        image={post.image}
        imageWidth={post.imageWidth}
        imageHeight={post.imageHeight}
      />
      <Header pathname={pathname} />
      <main role="main">
        <Post post={post} />
      </main>
      <Footer />
    </>
  );
};

page.getInitialProps = ({ pathname, query }) => {
  // This mimics getting a post from DB
  const post = getDummy(query.postId as string);
  return { pathname, query, post };
};

export default page;
