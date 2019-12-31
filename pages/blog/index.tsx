import { useEffect } from 'react';
import '../global.scss';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog from '../../components/blog';

const layout = () => {
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
        url="//localhost:3000/blog"
      />
      <Header />
      <main role="main">
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default layout;
