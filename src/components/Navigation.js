import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-primary" aria-label="Main navigation">
        <Link className="navbar-brand" href="/" aria-label="Roads Audio home">
          <Image
            src="/images/RoadsLogoRound.png"
            alt=""
            aria-hidden="true"
            height={42}
            width={42}
            className="m-2"
          />
          <Image src="/images/RoadsTextWhite.png" alt="Roads Audio" height={40} width={100} />
        </Link>
      </nav>
    );
  }
}

export default Navigation;
