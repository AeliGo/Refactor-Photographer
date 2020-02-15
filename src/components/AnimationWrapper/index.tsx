import React, { FC, useState, ReactElement, ReactComponentElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';

export interface AnimationWrapperProps {
  visible: Boolean;
  children: JSX.Element;
}

export const AnimationWrapper: FC<AnimationWrapperProps> = ({ visible, children }) => {
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
