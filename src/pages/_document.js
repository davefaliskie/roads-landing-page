import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-container">
          <Main />
          <NextScript />
          <Footer />
        </div>
      </body>
    </Html>
  );
}
