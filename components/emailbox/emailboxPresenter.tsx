import { ChangeEvent, MouseEvent } from 'react';
import styles from './emailbox.module.scss';

const presenter = (props: {
  uuid: string;
  value: string;
  msgValidity: string;
  isExpand: boolean;
  onEmailTyped: (event: ChangeEvent<HTMLInputElement>) => void;
  onIconClicked: (event: MouseEvent<HTMLElement>) => void;
  onSubmitClicked: (uuid: string) => (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const {
    uuid,
    value,
    msgValidity,
    isExpand,
    onEmailTyped,
    onIconClicked,
    onSubmitClicked,
  } = props;
  const id = `email-${uuid}`;
  return (
    <div className={styles.emailbox}>
      <form className={styles.container} id={`${id}-form`}>
        <label className={styles.title} form={`${id}-form`} htmlFor={`${id}-input`}>
          Subscribe our NEWS letter for FREE!
        </label>
        <p className={msgValidity === 'ng' ? `${styles.invalid} ${styles.show}` : styles.invalid}>
          Please, type a valid email
        </p>
        <p
          className={
            msgValidity === 'ok' ? `${styles.successful} ${styles.show}` : styles.successful
          }
        >
          Thank you! See you soon.
        </p>
        <i
          className={
            isExpand
              ? `${styles.icon} fas fa-envelope ${styles.expand}`
              : `${styles.icon} fas fa-envelope`
          }
          onClick={onIconClicked}
        ></i>
        <input
          id={`${id}-input`}
          form={`${id}-form`}
          name="email"
          type="email"
          autoComplete="on"
          placeholder="Email"
          value={value}
          onChange={onEmailTyped}
          className={isExpand ? styles.expand : ''}
        />
        <button
          className={isExpand ? `${styles.submit_btn} ${styles.expand}` : styles.submit_btn}
          id={`${id}-submit`}
          type="submit"
          onClick={onSubmitClicked(uuid)}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default presenter;
