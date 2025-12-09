import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <Link className="navbar-brand" href="/">
          <Image 
            src="/images/RoadsLogoRound.png"
            alt="Roads Icon"
            height={42}
            width={42}
            className="m-2"
          />
          <Image 
            src="/images/RoadsTextWhite.png"
            alt="Roads Logo"
            height={40}
            width={100}
          />
        </Link>
      </nav>
    );
  }
}

export default Navigation;
