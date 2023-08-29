import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';

class AppLinks extends Component {
  trackClickGA = (event_name) => {
    // Add event tracking here, but ensure it only runs when the button is clicked
    ReactGA.event({
      category: 'Button Click',
      action: event_name,
    });
  };

  render() {
    const appleLink = "https://apps.apple.com/us/app/roads-listen-comment-record/id6443961864"
    const googleLink = "https://play.google.com/store/apps/details?id=com.onemanstartup.roads"
    return (
      <div className="my-3 my-md-5 mx-auto text-center">
        <Link href={appleLink} onClick={ () => this.trackClickGA("AppStoreLinkClick") }>
          <Image 
            src="/images/download_apple.png"
            alt="Download Roads on the App Store"
            height={77}
            width={230}
            className="m-2"
          />
        </Link>
        <Link href={googleLink} onClick={ () => this.trackClickGA("GooglePlayLinkClick") }>
          <Image 
            src="/images/download_google.png"
            alt="Download Roads on the Play Store"
            height={77}
            width={230}
            className="m-2"
          />
        </Link>
      </div>
    );
  }
}

export default AppLinks;
