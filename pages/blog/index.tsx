import { useEffect } from 'react';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog from '../../components/blog';

const page = () => {
  const publicUrl = process.env.ROOT_PUBLIC_URL || 'localhost:3000';
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
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default page;
