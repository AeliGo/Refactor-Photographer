import React from 'react';
import Link from 'umi/link';
import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <div className={styles.indexName}>
            <Link to="/">Xu Yingda</Link>
          </div>
          <div className={styles.navLeftDropdown}>
            <span>
              <Link to="/enterIndex">Index</Link>
            </span>
            <span>
              <Link to="/thumbnails">Thumbnails</Link>
            </span>
            <span>
              <Link to="/infomation">Info</Link>
            </span>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
