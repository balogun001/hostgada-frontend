import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type HeaderTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header: string;
  subtext?: string;
};

export function HeaderText({
  header,
  subtext,
  className,
  ...rest
}: HeaderTextProps) {
  return (
    <div className={classNames('space-y-1 max-w-[350px]', className)} {...rest}>
      <h1 className="text-h5 sm:text-h4">{header}</h1>
      {subtext && <p className="text-p1">{subtext}</p>}
    </div>
  );
}
