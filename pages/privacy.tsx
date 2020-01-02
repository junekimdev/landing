import { useEffect } from 'react';
import './global.scss';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Privacy from '../components/privacy';

const page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
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
        url={`${publicUrl}/privacy`}
      />
      <Header pathname="/privacy" />
      <main role="main">
        <Privacy />
      </main>
      <Footer />
    </>
  );
};

export default page;
