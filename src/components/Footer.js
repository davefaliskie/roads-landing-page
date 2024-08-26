import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div id="section_footer">
        <div className='text-center py-4'>
          <Link href="https://1manstartup.com/privacy-policy" target="_blank" className='btn btn-link'>
            Privacy
          </Link>
          <span>|</span>
          <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn btn-link'>
            Terms
          </Link>
          <span>|</span>
          <Link href="mailto:Roads Audio<dave@roadsaudio.com>" className='btn btn-link'>
            Contact
          </Link>

          <div className='mt-2 mb-3'>
            <Link href="https://www.facebook.com/profile.php?id=61562204128726" target="_blank" className='social-icon mx-1'>
              <IoLogoFacebook size={25}/>
            </Link>

            <Link href="https://www.instagram.com/roadsaudio/" target="_blank" className='social-icon mx-1'>
              <IoLogoInstagram size={25}/>
            </Link>

            <Link href="https://www.linkedin.com/company/roads-audio/" target="_blank" className='social-icon mx-1'>
              <IoLogoLinkedin size={25}/>
            </Link>

            <Link href="https://www.tiktok.com/@roadsaudio" target="_blank" className='social-icon mx-1'>
              <IoLogoTiktok size={25}/>
            </Link>

            <Link href="https://www.youtube.com/@RoadsAudio" target="_blank" className='social-icon mx-1'>
              <IoLogoYoutube size={25}/>
            </Link>
          </div>

          <p>Copyright © {current_year}, 1ManStartup LLC. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
