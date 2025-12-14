import { useRouter } from 'next/router';
import Head from 'next/head';
import metaConfig from '@/utils/metaConfig';

const BASE_URL = 'https://roadsaudio.com';

const buildAbsoluteUrl = (url) => {
  if (!url) return BASE_URL;
  return url.startsWith('http') ? url : `${BASE_URL}${url}`;
};

const DynamicMeta = () => {
  const router = useRouter();
  const currentMeta = metaConfig[router.pathname] || metaConfig.default;
  const isDownloadPath = router.pathname === '/download';

  const path = router.asPath;
  const cleanPath = path.split("?")[0].split("#")[0];

  const canonical =
    cleanPath === "/" 
      ? "https://roadsaudio.com"
      : `https://roadsaudio.com${cleanPath}`;
  const metaImage = buildAbsoluteUrl(currentMeta.image);

  return (
    <Head>
      {/* PRIMARY META */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      
      {/* Favicon icons */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

      {/* Favicon Apple/iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

      {/* Favicon PWA / Android */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon/icon-512x512.png" />

      {/* Favicon Manifest */}
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <title>{currentMeta.title}</title>
      <meta name="title" content={currentMeta.title} />
      <meta name="description" content={currentMeta.description} />

      {/*  Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Roads Audio" />
      <meta itemProp="image" content={metaImage} />

      <meta name="apple-itunes-app" content="app-id=6443961864"></meta>

      <link rel="canonical" href={canonical} />
      
      {/*  Twitter */}
      {isDownloadPath ? (
        <>
          {/* show "download app link" */}
          <meta name="twitter:card" content="app" />
          <meta name="twitter:app:name:iphone" content="Roads" />
          <meta name="twitter:app:id:iphone" content="6443961864" />
          <meta name="twitter:app:name:googleplay" content="Roads" />
          <meta name="twitter:app:id:com.onemanstartup.roads" />
        </>
      ) : (
        <>
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={currentMeta.title} />
          <meta property="twitter:description" content={currentMeta.description} />
          <meta property="twitter:image" content={metaImage} />
        </>
      )}
    </Head>
  );
};

export default DynamicMeta;
