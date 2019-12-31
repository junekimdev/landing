import { MouseEvent } from 'react';
import Presenter from './pricingPresenter';

const interactor = () => {
  const onBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = (e.target as HTMLButtonElement).id;
    console.log(`Button ${id} is clicked`);
  };
  return <Presenter onBtnClicked={onBtnClicked} />;
};

export default interactor;
