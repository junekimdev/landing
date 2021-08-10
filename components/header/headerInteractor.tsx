import Presenter from './headerPresenter';

const interactor = (props: { pathname: string }) => {
  const { pathname } = props;
  const toggleMenu = () => {
    const nav = document.querySelector('nav');
    nav?.classList.toggle('show');
  };
  return <Presenter pathname={pathname} toggleMenu={toggleMenu} />;
};

export default interactor;
