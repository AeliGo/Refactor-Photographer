import React, { useState } from 'react';
import styles from './style.less';
import { AnimationWrapper } from '../../components/AnimationWrapper';

export default function() {
  const [inProp, setInProp] = useState(false);
  return (
      <AnimationWrapper visible={true}>
        <div>THUMBNAIL,-THUMBNAIL-THUMBNAIL-THUMBNAIL-THUMBNAIL-</div>
      </AnimationWrapper>
  );
}
