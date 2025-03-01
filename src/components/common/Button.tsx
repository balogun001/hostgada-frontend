/* eslint-disable react/button-has-type */

'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

const buttonStyle = cva(
  'rounded-lg gap-2 justify-center items-center inline-flex whitespace-nowrap w-max transition-all duration-150 text-p2 disabled:opacity-70',
  {
    defaultVariants: {
      block: false,
      kinds: 'primary',
      rounded: true,
      size: 'md',
    },
    variants: {
      block: { true: '!w-full' },
      kinds: {
        normal: 'border-none bg-orange-300 text-gray-500 hover:opacity-70',
        primary: 'bg-orange-800 text-white hover:bg-opacity-80 shadow-sm',
        secondary: 'border border-orange-700 text-white hover:opacity-70',
        tertiary:
          'border border-orange-700 bg-orange-50 text-orange-700 hover:opacity-70',
      },
      rounded: {
        true: '!rounded-full',
      },
      size: {
        xl: 'p-6',
        lg: 'px-12 py-4',
        md: 'px-8 py-2',
        sm: 'px-4 py-2',
        xsm: 'px-2 !text-p4',
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> & {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
  ref?: any;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Props & {
    href?: never;
  };

type ButtonLinkProps = LinkProps &
  Props & {
    href: string;
    download?: boolean;
  };

export function Button(props: ButtonProps): JSX.Element;
export function Button(props: ButtonLinkProps): JSX.Element;
export function Button({
  href,
  className,
  children,
  size,
  kinds,
  block,
  isLoading,
  rounded,
  ref,
  ...props
}: ButtonProps | ButtonLinkProps) {
  const style = classNames(
    buttonStyle({ block, kinds, rounded, size }),
    className
  );

  if (href) {
    return (
      <Link passHref {...(props as LinkProps)} className={style} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={style}
      ref={ref}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-white" />
      )}
      {children}
    </button>
  );
}
