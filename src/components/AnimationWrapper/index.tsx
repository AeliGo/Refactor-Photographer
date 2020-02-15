import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';

export interface AnimationWrapperProps {
  children: JSX.Element;
}

export const AnimationWrapper: FC<AnimationWrapperProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <CSSTransition
      in={visible}
      classNames={{
        enter: 'animated',
        enterActive: 'fadeIn',
        exit: 'animated',
        exitActive: 'fadeOut',
      }}
      timeout={{
        enter: 1500,
        exit: 0,
      }}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};
