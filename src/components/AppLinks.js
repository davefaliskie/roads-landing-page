import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '@/constants/appLinks';

class AppLinks extends Component {
  trackClick = (event_name) => {
    // Add event tracking here, but ensure it only runs when the button is clicked
    ReactGA.event({
      category: 'Button Click',
      action: event_name,
    });

    // Reddit Pixel event (only if pixel is available)
    if (typeof window !== 'undefined' && window.rdt && typeof window.rdt === 'function') {
      const rdt = window.rdt;
      rdt('track', event_name);
    }
  };

  render() {
    const { leftAlign } = this.props;
    const alignment = leftAlign ? 'text-left' : 'text-center mx-auto my-3'

    return (
      <div className={alignment}>
        <Link href={APPLE_STORE_URL} onClick={() => this.trackClick('AppStoreLinkClick')}>
          <Image 
            src="/images/download_apple.png"
            alt="Download Roads on the App Store"
            height={50}
            width={150}
            className={leftAlign ? 'm-0' : 'm-2'}
          />
        </Link>
        <Link href={GOOGLE_PLAY_URL} onClick={() => this.trackClick('GooglePlayLinkClick')}>
          <Image 
            src="/images/download_google.png"
            alt="Download Roads on the Play Store"
            height={50}
            width={150}
            className="m-2"
          />
        </Link>
      </div>
    );
  }
}

export default AppLinks;
