import styles from './about.module.scss';
import Brand from './aboutViewBrand';
import Person from './aboutViewPerson';

const presenter = () => {
  const longLorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia eius necessitatibus est, sequi ducimus totam velit fugiat';
  const company_desc = (
    <>
      <strong>My Company</strong> is {longLorem}
    </>
  );

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h1 className={styles.page_title}>About</h1>
        <h2 className={styles.subtitle}>Who are we?</h2>
        <Brand logo="/assets/LogoPlace_420x160.png" desc={company_desc} />
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p className={styles.mission}>{longLorem}</p>
        <h2 className={styles.subtitle}>Faces behind the curtain</h2>
        <div className={styles.personel}>
          <Person image="//i.pravatar.cc/300?u=CEO" title="CEO" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=CTO" title="CTO" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=CFO" title="CFO" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=DevLead" title="Dev Lead" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=Marketer" title="Marketer" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=Designer" title="Designer" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=Developer1" title="Developer" desc={lorem} />
          <Person image="//i.pravatar.cc/300?u=Developer2" title="Developer" desc={lorem} />
        </div>
      </div>
    </section>
  );
};

export default presenter;
