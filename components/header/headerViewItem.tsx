import { MouseEvent } from 'react';
import Link from 'next/link';

const view = (props: {
  path: string;
  name: string;
  onClicked: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const { path, name, onClicked } = props;

  return (
    <li>
      <Link href={path} as={path} scroll={path[0] === '/'}>
        <a className="item" onClick={onClicked}>
          {name}
        </a>
      </Link>
    </li>
  );
};

export default view;
