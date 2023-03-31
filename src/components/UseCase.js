import React, { Component } from 'react';
import styles from '@/styles/components/UseCase.module.scss';

class UseCase extends Component {
  render() {
    return (
      <div class="col-4">
        <div class={styles.use_case_card}></div>
      </div>
    );
  }
}

export default UseCase;
