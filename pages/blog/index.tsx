import { useEffect } from 'react';
import { NextPage } from 'next';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog, { getDummy } from '../../components/blog';
import { IPropsPageBlog, IPost } from '../../types';

const page: NextPage<IPropsPageBlog> = props => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title="Blog | Landing Page Template"
        desc="Blog of Landing Page Template"
        url={`${publicUrl}/blog`}
      />
      <Header pathname="/blog" />
      <main role="main">
        <Blog posts={props.posts} />
      </main>
      <Footer />
    </>
  );
};

page.getInitialProps = props => {
  // This mimics getting a post from DB
  const posts: Array<IPost> = [];
  for (let i = posts.length; i < posts.length + 10; i++) posts[i] = getDummy(i.toString());
  return { posts };
};

export default page;
