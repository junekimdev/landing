const view = (props: { image: string; title: string; content: string | JSX.Element }) => {
  const { title, content, image } = props;

  return (
    <div className="item">
      <img src={image} alt={title} className="item__img" />
      <div className="item__desc">
        <h2 className="item__title">{title}</h2>
        <p className="item__content">{content}</p>
      </div>
    </div>
  );
};

export default view;
