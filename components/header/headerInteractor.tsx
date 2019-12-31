import { useState, MouseEvent } from 'react';
import Presenter from './headerPresenter';

const interactor = () => {
  const [collapsed, setCollapsed] = useState(true);
  const detectScrolled = (callback: () => void) => {
    let timer: number;

    // Listen for scroll events
    const listener = () => {
      // While scrolling, timer will be reset
      window.clearTimeout(timer);

      // 100ms after scroll is done,
      timer = window.setTimeout(() => {
        // Remove the listener
        window.removeEventListener('scroll', listener);
        // Run the callback
        callback();
      }, 100);
    };
    window.addEventListener('scroll', listener, false);
  };
  const toggleMenu = () => {
    const nav = document.querySelector('nav');
    if (nav !== null) {
      if (collapsed) {
        nav.style.height = nav.scrollHeight + 'px';
      } else {
        nav.style.height = '0px';
      }
    }
    setCollapsed(!collapsed);
  };
  const onMenuClicked = (e: MouseEvent<HTMLAnchorElement>) => {
    detectScrolled(() => toggleMenu());
  };
  return <Presenter toggleMenu={toggleMenu} onMenuClicked={onMenuClicked} />;
};

export default interactor;
