import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '@/constants/appLinks';

const DownloadPage = () => null;

export const getServerSideProps = async ({ req }) => {
  const userAgent = req?.headers?.['user-agent'] || '';
  const isIOS = /iPad|iPhone|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  let destination = '/';

  if (isIOS) {
    destination = APPLE_STORE_URL;
  } else if (isAndroid) {
    destination = GOOGLE_PLAY_URL;
  }

  return {
    redirect: {
      destination,
      permanent: false,
    },
  };
};

export default DownloadPage;
