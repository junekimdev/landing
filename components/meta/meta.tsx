import Head from 'next/head';
const orgName = 'permeDev';
const siteName = 'landing page';
const Meta = (props: {
  title: string;
  desc: string;
  url: string;
  css?: string;
  image?: string;
  js?: string;
  children?: any;
}) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    {props.url && <link rel="canonical" href={props.url} />}

    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content={props.desc} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:url" content={props.url} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content={orgName} />
    <meta name="twitter:creator" content={orgName} />
    {props.css && <link rel="stylesheet" href={props.css} />}
    {props.image ? (
      <meta property="og:image" content={props.image} />
    ) : (
      <meta property="og:image" content="/assets/placeholder_250x250.png" />
    )}
    {props.image && <meta name="twitter:image" content={props.image} />}

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#dfdfdf" />

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto&display=swap" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    {props.js && <script src={props.js}></script>}
    {props.children}
  </Head>
);
export default Meta;
