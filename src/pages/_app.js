import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import { Montserrat } from 'next/font/google';
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
