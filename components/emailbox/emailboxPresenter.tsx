import { ChangeEvent, MouseEvent } from 'react';
import './emailbox.scss';

const presenter = (props: {
  uuid: string;
  value: string;
  onEmailTyped: (event: ChangeEvent<HTMLInputElement>) => void;
  onIconClicked: (uuid: string) => (event: MouseEvent<HTMLElement>) => void;
  onSubmitClicked: (uuid: string) => (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { uuid, value, onEmailTyped, onIconClicked, onSubmitClicked } = props;
  const id = `email-${uuid}`;
  return (
    <div className="emailbox">
      <form className="emailbox__container" id={`${id}-form`}>
        <label className="emailbox__title" form={`${id}-form`} htmlFor={`${id}-input`}>
          Subscribe our NEWS letter for FREE!
        </label>
        <p className="emailbox__invalid" id={`${id}-invalid`}>
          Please, type a valid email
        </p>
        <p className="emailbox__successful" id={`${id}-successful`}>
          Thank you! See you soon.
        </p>
        <i
          className="emailbox__icon fas fa-envelope"
          id={`${id}-icon`}
          onClick={onIconClicked(uuid)}
        ></i>
        <input
          className="emailbox__input"
          id={`${id}-input`}
          form={`${id}-form`}
          name="email"
          type="email"
          autoComplete="on"
          placeholder="Email"
          value={value}
          onChange={onEmailTyped}
        />
        <button
          className="emailbox__submit btn"
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
