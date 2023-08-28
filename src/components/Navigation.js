import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <Link className="navbar-brand" href="/">
          <Image 
            src="/images/RoadsTextWhite.png"
            alt="Roads Logo"
            height={50}
            width={125}
          />
        </Link>
      </nav>
    );
  }
}

export default Navigation;
