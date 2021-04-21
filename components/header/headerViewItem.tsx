import { MouseEvent } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const view = (props: {
  path: string;
  name: string;
  onClicked: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const { path, name, onClicked } = props;

  return (
    <li>
      <Link href={path} as={path} scroll={path[0] === '/'}>
        <a className={styles.item} onClick={onClicked}>
          {name}
        </a>
      </Link>
    </li>
  );
};

export default view;
