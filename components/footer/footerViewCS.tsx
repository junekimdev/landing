import styles from './footer.module.scss';

const view = (props: { email: string; address: string | JSX.Element; phone: string }) => {
  const { email, address, phone } = props;

  return (
    <address className={styles.cs}>
      <span className={styles.info}>{email}</span>
      <span className={styles.info}>{address}</span>
      <span className={styles.info}>{phone}</span>
    </address>
  );
};

export default view;
