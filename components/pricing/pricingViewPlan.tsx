import { MouseEvent } from 'react';

const view = (props: {
  uuid: string;
  className?: string;
  title: string;
  price?: string;
  body: JSX.Element;
  onBtnClicked: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { uuid, className, title, price, body, onBtnClicked } = props;
  const thisClass = className ? `plan ${className}` : 'plan';
  const id = `plan-${uuid}`;
  const priceText = title.toLowerCase() === 'free' ? '$ 0 ' : `$ ${price} `;
  const btnText = title.toLowerCase() === 'free' ? 'Get Started' : 'Buy Now';

  return (
    <div className={thisClass} id={id}>
      <div className="plan__container">
        <h1 className="plan__title">{title}</h1>
        <h2 className="plan__price">
          {priceText}
          <sub>/month</sub>
        </h2>
        <div className="plan__body">{body}</div>
        <button className="plan__buy btn" id={`${id}-btn`} onClick={onBtnClicked}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default view;
