const view = (props: { email: string; address: string | JSX.Element; phone: string }) => {
  const { email, address, phone } = props;

  return (
    <address className="cs">
      <span className="cs__info">{email}</span>
      <span className="cs__info">{address}</span>
      <span className="cs__info">{phone}</span>
    </address>
  );
};

export default view;
