import React, { Component } from 'react';
import Head from 'next/head';


class MetaData extends Component {
  render() {
    const { metaTitle, metaDescription, metaUrl, metaImage } = this.props;
    return (
      <Head>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/*  Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaUrl} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage}></meta>
      </Head>
    );
  }
}

export default MetaData;
