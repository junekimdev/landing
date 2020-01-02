import { useEffect } from 'react';
import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Post from '../../components/post';

interface IProps {
  pathname: string;
  query: ParsedUrlQuery;
}

const page: NextPage<IProps> = props => {
  const { pathname, query } = props;
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
      />
      <Header pathname={pathname} />
      <main role="main">
        <Post id={postId as string} />
      </main>
      <Footer />
    </>
  );
};

page.getInitialProps = ({ pathname, query }) => {
  return { pathname, query };
};

export default page;
