import { MouseEvent } from 'react';
import styles from './pricing.module.scss';
import Plan from './pricingViewPlan';

const presenter = (props: { onBtnClicked: (event: MouseEvent<HTMLButtonElement>) => void }) => {
  const { onBtnClicked } = props;
  const planBody = (
    <>
      <p>
        <strong>Free</strong> install
      </p>
      <p>
        <strong>One</strong> time payment
      </p>
      <p>
        <strong>Unlimitted</strong> data storage
      </p>
      <p>
        <strong>Access</strong> to 24/7 supports
      </p>
      <p>
        <strong>Great</strong> sales point
      </p>
      <p>
        <strong>More</strong> sales point
      </p>
    </>
  );
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <h1 className={styles.title}>Pricing</h1>
        <Plan uuid="a" title="Free" body={planBody} onBtnClicked={onBtnClicked} />
        <Plan
          uuid="b"
          title="Basic"
          price="100"
          body={planBody}
          isBest
          onBtnClicked={onBtnClicked}
        />
        <Plan uuid="c" title="Premium" price="500" body={planBody} onBtnClicked={onBtnClicked} />
      </div>
    </section>
  );
};

export default presenter;
