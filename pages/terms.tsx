import { useEffect } from 'react';
import './global.scss';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Terms from '../components/terms';

const layout = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
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
        url={`${publicUrl}/blog/terms`}
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
