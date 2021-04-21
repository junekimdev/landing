import { MouseEvent } from 'react';
import styles from './pricing.module.scss';

const view = (props: {
  uuid: string;
  title: string;
  price?: string;
  body: JSX.Element;
  isBest?: boolean;
  onBtnClicked: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { uuid, title, price, body, isBest, onBtnClicked } = props;
  const thisStyle = isBest ? `${styles.plan} ${styles.best}` : styles.plan;
  const id = `plan-${uuid}`;
  const priceText = title.toLowerCase() === 'free' ? '$ 0 ' : `$ ${price} `;
  const btnText = title.toLowerCase() === 'free' ? 'Get Started' : 'Buy Now';

  return (
    <div className={thisStyle} id={id}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.price}>
          {priceText}
          <sub>/month</sub>
        </h2>
        <div className={styles.body}>{body}</div>
        <button className={styles.buy_btn} id={`${id}-btn`} onClick={onBtnClicked}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default view;
