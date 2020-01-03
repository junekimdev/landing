import Link from 'next/link';

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
        <Link href={fb_url} as={fb_url}>
          <a>
            <i className="social__icon fab fa-facebook-f"></i>
          </a>
        </Link>
      )}
      {tw_url && (
        <Link href={tw_url} as={tw_url}>
          <a>
            <i className="social__icon fab fa-twitter"></i>
          </a>
        </Link>
      )}
      {insta_url && (
        <Link href={insta_url} as={insta_url}>
          <a>
            <i className="social__icon fab fa-instagram"></i>
          </a>
        </Link>
      )}
      {linkedin_url && (
        <Link href={linkedin_url} as={linkedin_url}>
          <a>
            <i className="social__icon fab fa-linkedin-in"></i>
          </a>
        </Link>
      )}
      {youtube_url && (
        <Link href={youtube_url} as={youtube_url}>
          <a>
            <i className="social__icon fab fa-youtube"></i>
          </a>
        </Link>
      )}
    </div>
  );
};

export default view;
