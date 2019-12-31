const view = (props: { logo: string; desc: string | JSX.Element }) => {
  const { logo, desc } = props;
  return (
    <div className="brand">
      <img src={logo} alt="company logo" className="brand__logo" />
      <p className="brand__desc">{desc}</p>
    </div>
  );
};

export default view;
