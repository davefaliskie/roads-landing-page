import React, { Component } from 'react';
import styles from '@/styles/components/UseCase.module.scss';

class UseCase extends Component {
  render() {
    return (
      <div className="col-4">
        <div className={styles.use_case_card}></div>
      </div>
    );
  }
}

export default UseCase;
