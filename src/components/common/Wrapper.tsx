import React, { DetailedHTMLProps } from 'react';
import classNames from 'classnames';

type WrapperProps = { dashboard?: boolean } & DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export function Wrapper({ className, dashboard, ...rest }: WrapperProps) {
  return (
    <section
      className={classNames('mx-auto max-w-[2000px] px-4', className, {
        'sm:px-8 xl:px-20': !dashboard,
        'sm:px-2 xl:px-10': dashboard,
      })}
      {...rest}
    />
  );
}
