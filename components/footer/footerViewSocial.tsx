const view = (props: {
  fb_url?: string;
  tw_url?: string;
  insta_url?: string;
  linkedin_url?: string;
  youtube_url?: string;
}) => {
  const { fb_url, tw_url, insta_url, linkedin_url, youtube_url } = props;

  return (
    <div className="social">
      {fb_url && (
        <a href={fb_url}>
          <i className="social__icon fab fa-facebook-f"></i>
        </a>
      )}
      {tw_url && (
        <a href={tw_url}>
          <i className="social__icon fab fa-twitter"></i>
        </a>
      )}
      {insta_url && (
        <a href={insta_url}>
          <i className="social__icon fab fa-instagram"></i>
        </a>
      )}
      {linkedin_url && (
        <a href={linkedin_url}>
          <i className="social__icon fab fa-linkedin-in"></i>
        </a>
      )}
      {youtube_url && (
        <a href={youtube_url}>
          <i className="social__icon fab fa-youtube"></i>
        </a>
      )}
    </div>
  );
};

export default view;
