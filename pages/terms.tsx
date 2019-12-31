import { useEffect } from 'react';
import './global.scss';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Terms from '../components/terms';

const layout = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title={`Terms | Landing Page Template`}
        desc={`Terms | Landing Page Template`}
        url={`//localhost:3000/blog/terms`}
      />
      <Header />
      <main role="main">
        <Terms />
      </main>
      <Footer />
    </>
  );
};

export default layout;
