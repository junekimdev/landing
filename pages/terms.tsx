import { useEffect } from 'react';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Terms from '../components/terms';

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
        title={`Terms | Landing Page Demo`}
        desc={`Terms | Landing Page Demo`}
        url={`${publicUrl}/terms`}
      />
      <Header pathname="/terms" />
      <main role="main">
        <Terms />
      </main>
      <Footer />
    </>
  );
};

export default page;
