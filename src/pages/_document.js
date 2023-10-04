import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        <div id='main-container'>
          <Main />
          <NextScript />
          <Footer />
        </div>
      </body>
    </Html>
  );
}
