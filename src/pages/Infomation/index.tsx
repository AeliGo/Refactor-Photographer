import React from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../../components/AnimationWrapper';

export default function() {
  return (
    <AnimationWrapper>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <div className={styles.mb15}>
            <p>
              Yingda Xu(徐英达) is a Chinese film photographer and graphic designer currently based
              in Guangzhou, China.
            </p>
            <p>
              In 2015, he graduated from Swinburne University in Melbourne, Australia with a
              bachelor of Visual Communication Design specialising in Photography.
            </p>
          </div>
          <p className={styles.mb15}>For business inquiries please contact me via email.</p>
          <div className={styles.mb55}>
            <p>
              <b>Email:</b> yingdaxu@outlook.com
            </p>
            <p>
              <b>Wechat:</b> Shawnxu92
            </p>
            <p></p>
          </div>
          <div>
            <p>
              <b>Press:</b>
            </p>
            <p>Shortlisted - Palm Photo Prize</p>
            <p>Aint-bad, Ayemag, Pample-Mousse, Altair Zine, </p>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
