import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Post from '../../components/post';

const layout = () => {
  const router = useRouter();
  const { postId, title } = router.query;
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
        url={`//localhost:3000/blog/${postId}?title=${title}`}
      />
      <Header />
      <main role="main">
        <Post id={postId as string} />
      </main>
      <Footer />
    </>
  );
};

export default layout;
