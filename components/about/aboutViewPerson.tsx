const view = (props: { image: string; title: string; desc: string | JSX.Element }) => {
  const { image, title, desc } = props;

  return (
    <div className="person">
      <img src={image} alt={`picture of ${title}`} className="person__img" />
      <h2 className="person__title">{title}</h2>
      <p className="person__desc">{desc}</p>
    </div>
  );
};

export default view;
