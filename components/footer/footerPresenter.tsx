import './footer.scss';
import Brand from './footerViewBrand';
import Social from './footerViewSocial';
import CS from './footerViewCS';
import Legal from './footerViewLegal';
import Engine from './footerViewEngine';

const presenter = () => {
  const companyName = 'My Company';
  const companyEmail = 'support@my-company.com';
  const companyAddress = (
    <>
      Some Place in the World <br /> where My Company can Prosper
    </>
  );
  const companyPhone = '+00-000-0000-0000';
  return (
    <footer className="footer">
      <div className="footer__container">
        <Brand image="/assets/placeholder_250x250.png" name={companyName} />
        <Social
          fb_url="//facebook.com"
          tw_url="//twitter.com"
          insta_url="//instragram.com"
          linkedin_url="//linkedin.com"
          youtube_url="//youtube.com"
        />
        <CS email={companyEmail} address={companyAddress} phone={companyPhone} />
        <Legal name={companyName} terms_url="/terms" privacy_url="/privacy" />
        <Engine />
      </div>
    </footer>
  );
};

export default presenter;
