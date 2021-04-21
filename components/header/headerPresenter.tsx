import { MouseEvent } from 'react';
import styles from './header.module.scss';
import Item from './headerViewItem';
import Brand from './headerViewBrand';

const presenter = (props: { pathname: string; toggleMenu: () => void }) => {
  const { pathname, toggleMenu } = props;
  const isRoot = pathname === '/';
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.toggle_btn} onClick={toggleMenu}>
          <span></span>
        </div>
        <Brand logo="/assets/LogoPlace_420x160.png" name="My Company" />
        <nav>
          <ul>
            <Item path="/" name="Home" onClicked={toggleMenu} />
            <Item
              path={isRoot ? '#products' : '/#products'}
              name="Products"
              onClicked={toggleMenu}
            />
            <Item path={isRoot ? '#pricing' : '/#pricing'} name="Pricing" onClicked={toggleMenu} />
            <Item
              path={isRoot ? '#features' : '/#features'}
              name="Features"
              onClicked={toggleMenu}
            />
            <Item path={isRoot ? '#about' : '/#about'} name="About" onClicked={toggleMenu} />
            <Item path="/blog" name="Blog" onClicked={toggleMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default presenter;
