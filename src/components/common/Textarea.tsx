import React, {
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const textareaStyles = cva(
  'w-full appearance-none focus:ring-0 rounded-md font-normal leading-loose px-3 text-sm',
  {
    defaultVariants: {
      error: false,
      intent: 'normal',
      size: 'sm',
    },
    variants: {
      error: {
        true: '!border-rose-500',
      },
      intent: {
        fill: 'bg-gray-100 border-gray-200 focus:border-brand-textInput',
        normal:
          'border-gray-300 border focus:!outline-none placeholder:text-transparent focus:border-orange-800 bg-transparent',
      },
      size: {
        lg: 'h-36',
        md: 'h-40',
        sm: 'h-28',
      },
    },
  }
);

export type TextAreaProps = Omit<
  VariantProps<typeof textareaStyles>,
  'error'
> & {
  label?: string;
  loading?: boolean;
  error?: string;
  addon?: ReactNode;
} & Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'size'
  >;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, intent, size, addon, className, ...rest }, ref) => {
    return (
      <label className={classNames('relative block', className)}>
        <textarea
          className={classNames(
            textareaStyles({ error: !!error, intent, size }),
            'peer'
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

TextArea.displayName = 'TextArea';
