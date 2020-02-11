import React from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';
import styles from './style.less';

type CardProps = {
  match?: Object;
  children: JSX.Element;
};

export default function(props: CardProps) {
  return (
    <div>
      <CSSTransition
        in={props.match !== null}
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
        {props.children}
      </CSSTransition>
    </div>
  );
}
