import Link from 'next/link';
import styles from './footer.module.scss';

const view = (props: { name: string; terms_url: string; privacy_url: string }) => {
  const { name, terms_url, privacy_url } = props;
  const thisYear = new Date().getFullYear().toString();

  return (
    <small className={styles.legal}>
      <span className={styles.info}>{`\u00A9 ${thisYear} ${name}. All rights reserved.`}</span>
      <span className={styles.info}>
        <Link href={terms_url} as={terms_url}>
          <a>Terms</a>
        </Link>
      </span>
      <span className={styles.info}>
        <Link href={privacy_url} as={privacy_url}>
          <a>Privacy</a>
        </Link>
      </span>
    </small>
  );
};

export default view;
