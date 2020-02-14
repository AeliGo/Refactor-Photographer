import React, { useState } from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../../components/AnimationWrapper';

export default function() {
  const [inProp, setInProp] = useState(false);
  return (
      <AnimationWrapper>
        <div>HOMEHOMEHOMEHOMEHOME----HOMEHOMEHOMEHOMEHOME---HOMEHOME</div>
      </AnimationWrapper>
  );
}
