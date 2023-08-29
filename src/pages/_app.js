import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import '@/styles/blogs.scss';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head'
import ReactGA from 'react-ga4';
import DynamicMeta from '@/components/DynamicMeta';


const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Google Analyitics.
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GTAG_ID}`)
  }, []);

  return (
    <>
      <DynamicMeta />
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
