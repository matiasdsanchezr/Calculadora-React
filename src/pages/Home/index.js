import React from 'react';
import styles from './index.module.css';

import Calculator from './Calculator';

const Home = () => {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  );
};

export default Home;
