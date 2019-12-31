import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import './header.scss';
import Item from './headerViewItem';
import Brand from './headerViewBrand';

const presenter = (props: {
  toggleMenu: () => void;
  onMenuClicked: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const { toggleMenu, onMenuClicked } = props;
  const router = useRouter();
  const isRoot = router.pathname === '/';
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__toggle-btn" onClick={toggleMenu}>
          <span></span>
        </div>
        <Brand logo="/assets/placeholder_250x250.png" name="My Company" />
        <nav className="header__nav">
          <ul>
            <Item path="/" name="Home" onClicked={onMenuClicked} />
            <Item
              path={isRoot ? '#products' : '/#products'}
              name="Products"
              onClicked={onMenuClicked}
            />
            <Item
              path={isRoot ? '#pricing' : '/#pricing'}
              name="Pricing"
              onClicked={onMenuClicked}
            />
            <Item
              path={isRoot ? '#features' : '/#features'}
              name="Features"
              onClicked={onMenuClicked}
            />
            <Item path={isRoot ? '#about' : '/#about'} name="About" onClicked={onMenuClicked} />
            <Item path="/blog" name="Blog" onClicked={onMenuClicked} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default presenter;
