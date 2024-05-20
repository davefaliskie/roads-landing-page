import React, { Component } from 'react';
import styles from '@/styles/Cards.module.scss';
import Image from 'next/image';

class Review extends Component {
  render() {
    const { body, name, className } = this.props;
    return (
      <div className={`col-md-6 col-lg-4 mb-4 ${className}`}>
        <div className={`${styles.review_card} h-100 d-flex flex-column`} >
          <div className='p-4 pb-2 flex-grow-1'>
            <div className='text-center'>
              <Image 
                src="/images/fiveStar.svg"
                alt="Five Star Review Rating"
                height={38}
                width={208}
              />
            </div>
            <div className='mt-4 flex-grow-1'>
              <p>{body}</p>
            </div>
          </div>
          <div className='pb-2 pe-4 text-end mt-auto'>
            <strong>{name}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
