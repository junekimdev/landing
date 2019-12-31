const view = (props: { image: string; name: string }) => {
  const { image, name } = props;
  return (
    <div className="brand">
      <img src={image} alt="Brand logo" className="brand__logo" />
      <h1 className="brand__name">{name}</h1>
    </div>
  );
};

export default view;
