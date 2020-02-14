import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';

export interface IProps {
  match?: Object;
  children: JSX.Element;
}

export const AnimationWrapper: FC<IProps> = ({ match, children }) => {
  return (
    <CSSTransition
      in={match !== null}
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
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {children}
    </CSSTransition>
  );
};
