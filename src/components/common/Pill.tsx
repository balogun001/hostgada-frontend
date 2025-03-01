/* eslint-disable react/button-has-type */

'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx'; // Import clsx for merging className

const pillStyle = cva(
  'rounded-full px-3 py-1 flex justify-center items-center text-xs font-medium disabled:opacity-70',
  {
    defaultVariants: {
      kinds: 'primary', // Set default variant
    },
    variants: {
      kinds: {
        error: 'text-brand-red-700 bg-brand-red-50',
        primary:
          'bg-[#E3EFFC] bg-opacity-50 text-brand-blue hover:bg-opacity-80',
        secondary: 'text-yellow-700 bg-yellow-50',
        success: 'text-brand-green-700 bg-brand-green-50',
      },
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof pillStyle> & {
    children: ReactNode;
  };

export function Pill({
  className,
  children,
  kinds,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(pillStyle({ kinds }), className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
