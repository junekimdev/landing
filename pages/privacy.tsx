import { useEffect } from 'react';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Privacy from '../components/privacy';

const Page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title={`Privacy | Landing Page Demo`}
        desc={`Privacy | Landing Page Demo`}
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

export default Page;
