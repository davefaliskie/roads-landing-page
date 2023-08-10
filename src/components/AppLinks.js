import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';

class AppLinks extends Component {
  render() {
    // todo make sure these are the correct links once apps are approved.
    const appleLink = "https://apps.apple.com/us/app/roads-listen-comment-record/id6443961864"
    const googleLink = "https://play.google.com/store/apps/details?id=com.onemanstartup.roads"
    return (
      <div className="col-md-6 my-3 my-md-5 mx-auto text-center">
        <Link href={appleLink} >
          <Image 
            src="/images/download_apple.png"
            alt="Download Roads on the App Store"
            height={77}
            width={230}
            className="m-2"
          />
        </Link>
        <Link href={googleLink} >
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
