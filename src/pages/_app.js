import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import '@/styles/blogs.scss';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga4';
import DynamicMeta from '@/components/DynamicMeta';
import useDropShadow from '@/hooks/useDropShadow';
import Layout from '@/components/Layout';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useDropShadow();
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize Google Analyitics.
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GTAG_ID}`);
  }, []);

  return (
    <>
      <DynamicMeta />
      {/* Apply the font to the whole document, including the footer rendered in _document. */}
      <style jsx global>{`
        :root {
          --bs-body-font-family: ${plusJakartaSans.style.fontFamily};
        }
        html,
        body {
          font-family: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>
      <main className={plusJakartaSans.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
