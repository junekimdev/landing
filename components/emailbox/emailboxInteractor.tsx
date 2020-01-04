import { useState, ChangeEvent, MouseEvent } from 'react';
import { IEmailbox } from '../../types';
import Presenter from './emailboxPresenter';

const validEmailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const interactor = (props: IEmailbox) => {
  const { uuid } = props;
  const [email, setEmail] = useState('');
  const onEmailTyped = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onIconClicked = (uuid: string) => (e: MouseEvent<HTMLElement>) => {
    const elements: HTMLElement[] | null[] = [];
    elements[0] = e.target as HTMLElement;
    elements[1] = document.getElementById(`email-${uuid}-input`);
    elements[2] = document.getElementById(`email-${uuid}-submit`);
    elements.forEach((element: HTMLElement | null) => {
      element?.classList.add('expand');
    });
  };
  const onSubmitClicked = (uuid: string) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(`email-${uuid}-input`) as HTMLInputElement;
    const invalidMsg = document.getElementById(`email-${uuid}-invalid`) as HTMLInputElement;
    const successfulMsg = document.getElementById(`email-${uuid}-successful`) as HTMLInputElement;
    if (element !== null) {
      let email = element.value;
      email = email.trim().toLowerCase();
      if (validEmailRegex.test(email)) {
        invalidMsg.classList.remove('emailbox__invalid--show');
        successfulMsg.classList.add('emailbox__successful--show');
        //TODO: API call to submit
      } else {
        invalidMsg.classList.add('emailbox__invalid--show');
        successfulMsg.classList.remove('emailbox__successful--show');
      }
    }
  };

  return (
    <Presenter
      uuid={uuid}
      value={email}
      onEmailTyped={onEmailTyped}
      onIconClicked={onIconClicked}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default interactor;
