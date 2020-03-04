import { useEffect } from 'react';
import './global.scss';
import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import Products from '../components/products';
import Emailbox from '../components/emailbox';
import Pricing from '../components/pricing';
import Features from '../components/features';
import About from '../components/about';

const page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    Modernizr.on('intersectionobserver', detected => {
      const header = document.querySelector('header');
      if (detected) {
        // For broswers that implement Intersection-Observer
        const homeSection = document.querySelector('#hero') as HTMLElement;
        const observerOption = {
          rootMargin: '-72px 0px 0px 0px',
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              // Home is not visiable
              header?.classList.add('header--opaque');
            } else {
              header?.classList.remove('header--opaque');
            }
          });
        }, observerOption);
        if (homeSection !== null) observer.observe(homeSection);
        return () => observer.unobserve(homeSection);
      } else {
        header?.classList.add('header--opaque');
      }
    });
  }, []);

  return (
    <>
      <Meta title="Landing Page Template" desc="Landing Page Template" url={publicUrl} />
      <Header pathname="/" />
      <main role="main">
        <Home />
        <Products />
        <Emailbox uuid="a" />
        <Pricing />
        <Features />
        <About />
        <Emailbox uuid="b" />
      </main>
      <Footer />
    </>
  );
};

export default page;
