import React, { useState } from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../components/AnimationWrapper';

export default function() {
  return (
    <AnimationWrapper visible={true}>
      <div className={styles.enterContainer} />
    </AnimationWrapper>
  );
}
