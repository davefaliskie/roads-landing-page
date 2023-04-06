import React, { Component } from 'react';
import styles from '@/styles/UseCase.module.scss';
import Image from 'next/image';


class UseCase extends Component {
  render() {
    const { imagePath, title } = this.props;
    return (
      <div className="col-6 col-md-4 mb-4">
        <div className={`${styles.use_case_card} h-100`} >
          <div className='text-center p-3'>
            <Image 
              src={imagePath}
              alt="Icon image related to the use case"
              height={75}
              width={75}
            />
            <div className='mt-4'>
              <h6>{title}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UseCase;
