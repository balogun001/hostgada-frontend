/* eslint-disable react/no-array-index-key */
import {
  DocumentIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React, { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

import ImageUploadIcon from 'src/assets/icons/ImageUploadIcon';
import { BodyText } from './Text';
import { Button } from './Button';

const accept = {
  'image/*': ['.png', '.jpeg', '.jpg'],
};

type ImageInputProps = {
  onChange: (selected: (string | File)[]) => void;
  maxFiles?: number;
  value?: (string | File)[];
  label?: string;
  uploadComponent?: React.ReactNode;
  isMultiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  customImagehandler?: () => void;
};

export function ImageInput({
  onChange = () => {},
  disabled,
  value = [],
  label,
  maxFiles = 4,
  uploadComponent,
  isMultiple = true,
  placeholder,
  error,
  customImagehandler,
}: ImageInputProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = useCallback(
    async (files: File[]) => {
      const newImages = isMultiple ? [...value, ...files] : [files[0]];
      onChange(newImages);
    },
    [isMultiple, onChange, value]
  );

  const isDisabled = disabled || maxFiles === value?.length;

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    disabled: isDisabled,
    maxFiles: maxFiles - value.length,
    multiple: isMultiple,
    onDrop,
  });

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getUploadComponent = () => {
    if (uploadComponent) {
      return (
        <label {...getRootProps()}>
          {uploadComponent}
          <input disabled={!!disabled} hidden {...getInputProps()} />
        </label>
      );
    }

    return (
      <div className="relative">
        {label && (
          <span className="flex text-gray-400 items-center gap-2 text-sm font-medium leading-6">
            {label}
          </span>
        )}

        <div
          className={classNames(
            'border-gray-400 block rounded-xl border border-dashed p-2',
            { 'border-rose-500': !!error }
          )}
          {...getRootProps()}
        >
          <div className="relative">
            <label className="block py-4 text-center">
              <ImageUploadIcon className="mx-auto" />
              <span className="block py-2 text-sm text-gray-400 font-medium sm:text-sm sm:leading-6">
                {placeholder}
              </span>
              <BodyText className="text-center !text-sm text-gray-400">
                Supports JPEG & PNG
              </BodyText>
              <input
                className="sr-only"
                ref={fileInputRef}
                id="file-upload"
                name="file-upload"
                type="file"
                multiple={isMultiple}
                accept="image/png, image/jpg, image/jpeg"
                onChange={(e) => onDrop(Array.from(e.target.files || []))}
              />
            </label>

            <div
              className={classNames('grid gap-4 ', {
                'sm:grid-cols-2': value.length > 1,
              })}
            >
              {value.map((image, index) => (
                <div
                  className="gap-z-3 border-gray-400 border border-dashed relative mt-2 flex justify-between overflow-hidden rounded-md p-2"
                  key={index}
                >
                  <BodyText className="flex gap-x-1 text-sm text-green-700">
                    <DocumentIcon className="h-5 w-5" />
                    {image instanceof File ? image.name : image}
                  </BodyText>
                  <button
                    onClick={() =>
                      onChange(value.filter((_, idx) => idx !== index))
                    }
                    type="button"
                  >
                    <XMarkIcon className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 2xl:p-8">
              <Button kinds="tertiary" onClick={handleUploadClick}>
                Upload
              </Button>
              {customImagehandler && (
                <Button kinds="tertiary" onClick={customImagehandler}>
                  Custom Images
                </Button>
              )}
            </div>
          </div>
        </div>

        {error && (
          <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {error}
          </p>
        )}
      </div>
    );
  };

  return <>{getUploadComponent()}</>;
}
