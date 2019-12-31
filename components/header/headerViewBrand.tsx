import Link from 'next/link';

const view = (props: { logo: string; name: string }) => {
  const { logo, name } = props;
  return (
    <div className="brand">
      <img src={logo} alt="Brand logo" className="brand__logo" />
      <Link href="/">
        <a className="brand__name">{name}</a>
      </Link>
    </div>
  );
};

export default view;
