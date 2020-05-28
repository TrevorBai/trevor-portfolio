import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface TransitionWrapperProps {
  show: boolean;
  unmountOnExit?: boolean;
  name: string;
  children: JSX.Element;
}

export const TransitionWrapper: FC<TransitionWrapperProps> = ({
  show,
  unmountOnExit,
  name,
  children,
}) => {
  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 200, exit: 200 }}
      mountOnEnter
      unmountOnExit={unmountOnExit}
      classNames={name}
    >
      {children}
    </CSSTransition>
  );
};
