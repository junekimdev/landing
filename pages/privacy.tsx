import { useEffect } from 'react';
import './global.scss';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Privacy from '../components/privacy';

const layout = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title={`Privacy | Landing Page Template`}
        desc={`Privacy | Landing Page Template`}
        url={`//localhost:3000/blog/privacy`}
      />
      <Header />
      <main role="main">
        <Privacy />
      </main>
      <Footer />
    </>
  );
};

export default layout;
