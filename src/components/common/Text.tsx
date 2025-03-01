import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type TitleProps = {
  children: ReactNode;
  dashboard?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export function Title({ className, children, dashboard, ...rest }: TitleProps) {
  return (
    <h2
      className={classNames(className, 'text-h3', {
        'sm:text-h1': !dashboard,
        'sm:text-h2 text-gray-600 py-4': dashboard,
      })}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function BodyText({ className, children, ...rest }: TitleProps) {
  return (
    <p className={classNames(className, 'text-p1')} {...rest}>
      {children}
    </p>
  );
}
