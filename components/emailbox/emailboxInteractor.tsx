import { useState, ChangeEvent, MouseEvent } from 'react';
import { IEmailbox } from '../../types';
import Presenter from './emailboxPresenter';

const validEmailRegex =
  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const interactor = (props: IEmailbox) => {
  const { uuid } = props;
  const [email, setEmail] = useState('');
  const [msgValidity, setMsgValidity] = useState('');
  const [isExpand, setIsExpand] = useState(false);
  const onEmailTyped = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onIconClicked = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsExpand(true);
  };
  const onSubmitClicked = (uuid: string) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(`email-${uuid}-input`) as HTMLInputElement;
    if (element !== null) {
      let email = element.value;
      email = email.trim().toLowerCase();
      const validity = validEmailRegex.test(email) ? 'ok' : 'ng';
      setMsgValidity(validity);
      if (validity === 'ok') {
        // Do something when msg is valid
      }
    }
  };

  return (
    <Presenter
      uuid={uuid}
      value={email}
      msgValidity={msgValidity}
      isExpand={isExpand}
      onEmailTyped={onEmailTyped}
      onIconClicked={onIconClicked}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default interactor;
