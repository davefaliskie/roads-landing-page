import React, { Component } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';
import Link from 'next/link';
import AppLinks from '@/components/AppLinks';

class Hero extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <div id={styles.section_headline_container}>
          <div id={styles.section_headline}>
            
            <nav className={`${styles.heroNav} navbar text-center text-md-left`}>
              <Link className="navbar-brand mx-auto mx-md-0" href="/">
                <Image 
                  src="/images/RoadsLogoRound.png"
                  alt="Roads Icon"
                  height={32}
                  width={32}
                  className="m-2"
                />
                <Image 
                  src="/images/RoadsTextBlack.png"
                  alt="Roads Logo"
                  height={30}
                  width={75}
                  className=""
                />
              </Link>
            </nav>

            <div className={styles.heroInner}>
              <div className={styles.textColumn}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.ctaGroup}>
                  <AppLinks leftAlign='true'/>
                </div>
              </div>

              <div className={styles.imageColumn}>
                <Image
                  src="/images/phones/device_15_player_full.png"
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={800}
                  width={400}
                  className={`${styles.deviceImage} phone_shadow`}
                  priority
                />
              </div>
            </div>
          </div>

          <div id={styles.qr_code} className="d-none d-lg-block">
            <Image
              src="/images/RoadsAppQR.png"
              alt="Roads Logo"
              height={120}
              width={120}
              className="mr-3 mb-4"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
