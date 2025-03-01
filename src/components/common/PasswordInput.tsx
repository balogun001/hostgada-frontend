import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const inputStyles = cva(
  'w-full appearance-none rounded-md focus:ring-0 font-normal leading-loose px-3 text-sm',
  {
    defaultVariants: {
      error: false,
      intent: 'normal',
      size: 'md',
    },
    variants: {
      error: {
        true: '!border-rose-500',
      },
      intent: {
        fill: 'bg-gray-100 border-gray-200 focus:border-brand-textInput',
        normal:
          'border-gray-300 border focus:outline-none placeholder:text-transparent focus:border-orange-800 bg-transparent',
      },
      size: {
        lg: 'h-16',
        md: 'h-12',
        sm: 'h-10',
      },
    },
  }
);

export type PasswordInputProps = Omit<
  VariantProps<typeof inputStyles>,
  'error'
> & {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  addon?: boolean;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'type'
  >;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { label, error, intent, size, addon, className, leftIcon, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <label className={classNames('relative block', className)}>
        <input
          className={classNames(
            inputStyles({ error: !!error, intent, size }),
            'peer',
            {
              'pl-8': leftIcon,
              'pr-8': true, // Account for the toggle icon
            }
          )}
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          placeholder=" "
          {...rest}
        />
        {label && (
          <span className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 transform scale-75 -translate-y-4 bg-white px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-orange-800">
            {label}
          </span>
        )}
        {leftIcon && (
          <div className="text-brand-textBlack pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center px-2">
            {leftIcon}
          </div>
        )}
        <button
          className="text-gray-400 absolute inset-y-0 right-0 z-20 flex items-center justify-center px-4 text-sm font-medium leading-6 hover:opacity-70"
          onClick={() => setShowPassword((prev) => !prev)}
          type="button"
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
        {error && (
          <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {error}
          </p>
        )}
        {addon && (
          <div className="mt-2 hidden space-y-2 transition-all duration-100 group-focus-within:block">
            <span className="block text-sm font-semibold text-black">
              Password Requirements
            </span>
            <ul className="text-brand-textBlack list-disc space-y-1 px-4 text-sm">
              <li>At least 1 lowercase letter</li>
              <li>At least 1 uppercase letter</li>
              <li>At least 1 number</li>
              <li>At least 1 special character</li>
              <li>Minimum 6 characters</li>
            </ul>
          </div>
        )}
      </label>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
