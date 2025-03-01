import classNames from 'classnames';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        'bg-white w-full rounded-xl p-4 shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
