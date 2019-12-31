const view = (props: { imgSrc: string; imgDesc: string; descTitle: string; descContent: string | JSX.Element }) => {
  const { imgSrc, imgDesc, descTitle, descContent } = props;
  return (
    <div className="item">
      <img src={imgSrc} alt={imgDesc} />
      <div className="item__card">
        <h1 className="item__title">{descTitle}</h1>
        <p className="item__content">{descContent}</p>
      </div>
    </div>
  );
};

export default view;
