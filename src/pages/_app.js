import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head'
import ReactGA from 'react-ga4';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Google Analyitics.
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GTAG_ID}`)
  }, []);

  return (
    <main className={montserrat.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
