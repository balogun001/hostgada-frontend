import classNames from 'classnames';
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type'
> & {
  label?: any;
  type?: 'radio' | 'checkbox';
  className?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'checkbox', className, ...rest }, ref) => {
    return (
      <div className={classNames('flex items-center gap-3', className)}>
        <input
          aria-describedby="comments-description"
          className="h-4 w-4 rounded border-gray-300 accent-[#fe974d] focus:ring-orange-500"
          id="comments"
          name="comments"
          ref={ref}
          type={type}
          {...rest}
        />{' '}
        {label && (
          <span className="block text-sm font-medium leading-6">{label}</span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
