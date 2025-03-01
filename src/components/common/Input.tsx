import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const inputStyles = cva(
  'w-full appearance-none focus:ring-0 rounded-md font-normal leading-loose px-3 text-sm',
  {
    defaultVariants: {
      error: false,
      intent: 'normal',
      size: 'md',
      rounded: false,
    },
    variants: {
      error: {
        true: '!border-rose-500',
      },
      intent: {
        fill: 'bg-gray-300 border-none focus:!outline-none',
        normal:
          'border-gray-300 border focus:!outline-none placeholder:text-transparent focus:border-orange-800 bg-transparent',
      },
      rounded: {
        true: '!rounded-full',
      },
      size: {
        lg: 'h-16',
        md: 'h-12',
        sm: 'h-10',
      },
    },
  }
);

export type InputProps = Omit<VariantProps<typeof inputStyles>, 'error'> & {
  label?: string;
  loading?: boolean;
  error?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  addon?: ReactNode;
  isLoading?: boolean;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      intent,
      rounded,
      size,
      rightIcon,
      addon,
      className,
      leftIcon,
      isLoading,
      ...rest
    },
    ref
  ) => {
    return (
      <label className={classNames('relative block', className)}>
        <input
          className={classNames(
            inputStyles({ error: !!error, intent, size, rounded }),
            'peer',
            {
              'pl-12': leftIcon,
              'pr-12': rightIcon,
            }
          )}
          ref={ref}
          placeholder=" "
          {...rest}
        />
        {label && (
          <span className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 transform scale-75 -translate-y-4 bg-white px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-orange-800">
            {label}
          </span>
        )}
        {leftIcon && (
          <div className="text-brand-textBlack pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center px-6">
            {leftIcon}
          </div>
        )}
        {rightIcon && (
          <div className="text-brand-textBlack absolute inset-y-0 right-0 z-20 flex items-center justify-center px-6">
            {rightIcon}
          </div>
        )}
        {isLoading && (
          <div className="text-brand-textBlack absolute inset-y-0 right-0 z-20 mr-3 flex  items-center justify-center">
            <div className="border-t-brand-blue h-4 w-4 animate-spin rounded-full border-2" />
          </div>
        )}
        {error && (
          <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {error}
          </p>
        )}
        {addon && (
          <div className="mt-2 h-0 overflow-hidden opacity-0 transition-all duration-100 group-focus-within:h-max group-focus-within:opacity-100">
            {addon}
          </div>
        )}
      </label>
    );
  }
);

Input.displayName = 'Input';
