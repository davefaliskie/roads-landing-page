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
            <div id={styles.qr_code} className={`d-none d-lg-block`}>
                <Image 
                  src="/images/RoadsAppQR.png"
                  alt="Roads Logo"
                  height={100}
                  width={100}
                  className="pr-3"
                />
              </div>
            <span className={styles.vLine1}>
              <Image 
                src="/images/node-bright.svg" 
                width={15} 
                height={15} 
                alt="Circle used for background style"
                className={`${styles.node_sm1} d-none d-md-block`}
              />
            </span>
            <span className={`${styles.vLine2} d-none d-md-block`}></span>
            <span className={styles.vLine3}></span>
            <span className={`${styles.vLine4} d-none d-md-block`}></span>
            <span className={`${styles.vLine5} d-none d-md-block`}></span>
            <span className={styles.vLine6}>
              <Image 
                src="/images/node-bright.svg" 
                width={15} 
                height={15} 
                alt="Circle used for background style"
                className={styles.node_sm2}
              />
            </span>
            
            <nav className="navbar text-center text-md-left">
              <Link className="navbar-brand mx-auto mx-md-4" href="/">
                <Image 
                  src="/images/RoadsTextWhite.png"
                  alt="Roads Logo"
                  height={50}
                  width={125}
                  className=""
                />
              </Link>
            </nav>


            <div className='text-center text-light'>
              <h1 className='pt-1 px-3 pb-3'>{title}</h1>
              <div className='row justify-content-center px-3'>
                <p className='col-md-10 col-lg-6 col-xl-4'>
                  {subtitle}
                </p>
              </div>
              < AppLinks />
            </div>

            <div className={`${styles.cover_imgs_container} text-center d-flex justify-content-center animate-slide-up`}>
                <Image 
                  src="/images/phones/device_15_home_feed2.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className='phone_shadow mt-5 d-none d-md-block'
                />
                <Image 
                  src="/images/phones/device_15_player_full.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={500}
                  width={250}
                  className='phone_shadow mx-4'
                />
                <Image 
                  src="/images/phones/device_15_player_response.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className='phone_shadow mt-5 d-none d-md-block'
                />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
