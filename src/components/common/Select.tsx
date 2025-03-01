import React, { ReactNode } from 'react';
import ReactSelect, {
  components,
  Props as ReactSelectProps,
} from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/creatable';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const controlStyles = cva('w-full rounded-md border text-sm', {
  defaultVariants: {
    error: false,
    intent: 'normal',
    isDisabled: false,
    isFocused: false,
    size: 'md',
  },
  variants: {
    error: {
      true: '!border-rose-500',
    },
    intent: {
      fill: '!bg-gray-100 !border-gray-100 focus-within:!border-brand-textInput',
      normal:
        '!border-gray-300 border focus:!outline-none placeholder:text-gray-200 focus:!border-orange-800 bg-transparent',
    },
    isDisabled: {
      true: '!bg-gray-100',
    },
    isFocused: {
      false: '!border-gray-300',
      true: '!border-brand-textInput',
    },
    size: {
      lg: '!min-h-[4rem]',
      md: '!min-h-[3rem]',
    },
  },
});

export type SelectProps<Option, IsMulti extends boolean> = Omit<
  VariantProps<typeof controlStyles>,
  'error' | 'isFocused'
> &
  ReactSelectProps<Option, IsMulti> & {
    isCreatable?: boolean;
    label?: string;
    helpText?: string;
    error?: string;
    isAsync?: boolean;
    leftIcon?: ReactNode;
  };

const getSelectComponent = (isAsync?: boolean, isCreatable?: boolean) => {
  if (isAsync) return ReactSelectAsync;
  if (isCreatable) return ReactSelectCreatable;
  return ReactSelect;
};

export function Select<Option, IsMulti extends boolean>({
  label,
  error,
  isCreatable,
  isDisabled,
  placeholder,
  helpText,
  isAsync,
  leftIcon,
  intent,
  size,
  ...props
}: SelectProps<Option, IsMulti>) {
  const SelectComponent = getSelectComponent(isAsync, isCreatable);

  return (
    <label className="relative block w-full">
      <SelectComponent
        {...props}
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            controlStyles({
              error: !!error,
              intent,
              isDisabled,
              isFocused,
              size,
            }),
          indicatorSeparator: () => 'hidden',
          placeholder: () => '!text-gray-200',
        }}
        components={{
          ValueContainer: ({ children, className, ...rest }) => (
            <components.ValueContainer
              className={classNames(className, '!flex items-center gap-x-1')}
              {...rest}
            >
              {leftIcon && <span>{leftIcon}</span>}
              {children}
            </components.ValueContainer>
          ),
        }}
        id={props.name}
        isDisabled={isDisabled}
        placeholder=" "
        styles={{
          control: (base) => ({
            ...base,
            boxShadow: 'none',
          }),
          input: (base) => ({
            ...base,
            'input:focus': {
              boxShadow: 'none',
            },
          }),
        }}
      />
      {label && (
        <span className="absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform scale-75 -translate-y-4 bg-white px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-orange-800">
          {label}
        </span>
      )}
      {error && (
        <p className="mt-2 text-sm text-rose-600" id={`${props.name}-error`}>
          {error}
        </p>
      )}
      {helpText && (
        <p
          className="mt-2 text-sm text-gray-500"
          id={`${props.name}-description`}
        >
          {helpText}
        </p>
      )}
    </label>
  );
}
