import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />

        {/* PRIMARY META */}
        <meta name="title" content="Roads - Discover the Future of Audio" />
        <meta name="description" content="Record, comment, and share your voice on the first app that connects people through dynamic conversations" />

        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roadsaudio.com" />
        <meta property="og:title" content="Roads - Discover the Future of Audio" />
        <meta property="og:description" content="Record, comment, and share your voice on the first app that connects people through dynamic conversations" />
        <meta property="og:image" content="https://roadsaudioassets.s3.amazonaws.com/Roads_Cover.png" />

        {/*  Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://roadsaudio.com" />
        <meta property="twitter:title" content="Roads - Discover the Future of Audio" />
        <meta property="twitter:description" content="Record, comment, and share your voice on the first app that connects people through dynamic conversations" />
        <meta property="twitter:image" content="https://roadsaudioassets.s3.amazonaws.com/Roads_Cover.png"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
