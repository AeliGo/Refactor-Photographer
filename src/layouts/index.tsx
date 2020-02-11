import React from 'react';
import styles from './index.css';
import Link from 'umi/link';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <div>
      <Link to="/">Go to Home page</Link>
      <Link to="/infomation">Go to infomation page</Link>
      <Link to="/thumbnail">Go to thumbnail page</Link>
      </div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
