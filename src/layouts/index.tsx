import React from 'react';
import Link from 'umi/link';
import styles from './index.less';
import classNames from 'classnames';

export interface BasicLayoutProps {
  location?: {
    pathname: string;
  };
  children: JSX.Element;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ location = {}, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navContainer}>
        <div
          className={classNames(styles.navLeft, {
            [styles.darkColor]: location.pathname !== '/',
          })}
        >
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
      <div className={styles.pages}>{children}</div>
    </div>
  );
};

export default BasicLayout;
