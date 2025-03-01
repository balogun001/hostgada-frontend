'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import toast, {
  Renderable,
  ToastBar,
  Toaster,
  ToastType,
} from 'react-hot-toast';
import { ErrorIcon } from 'src/assets/icons/ErrorIcon';
import { SuccessIcon } from 'src/assets/icons/SuccessIcon';
import { WarningIcon } from 'src/assets/icons/WarningIcon';

function Message({ type, message }: { type?: ToastType; message: Renderable }) {
  switch (type) {
    case 'success':
      return (
        <div className="flex">
          <SuccessIcon className="h-6 w-6 text-green-800" />
          <div className="!text-white">
            <h4 className="ml-2 font-semibold">Successful!</h4>
            <p className="!text-left !text-sm">{message}</p>
          </div>
        </div>
      );

    case 'error':
      return (
        <div className="flex">
          <ErrorIcon className="h-6 w-6 text-red-800" />
          <div className="!text-white">
            <h4 className="ml-2 font-semibold">Error!</h4>
            <p className="!text-left !text-sm">{message}</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex">
          <WarningIcon className="h-6 w-6 text-yellow-800" />
          <div className="!text-white">
            <h4 className="ml-2 font-semibold">Error!</h4>
            <p className="!text-left !text-sm">{message}</p>
          </div>
        </div>
      );
  }
}

export function ToastContainer() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: '!bg-black  !p-0',
        error: {
          className: '!bg-black !p-0',
        },
        success: {
          className: '!bg-black !p-0',
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div className="flex h-max">
              <div
                className={classNames('h-2-full w-2 bg-yellow-800', {
                  '!bg-green-800': t.type === 'success',
                  '!bg-red-800': t.type === 'error',
                })}
              />

              <div className="flex gap-x-2 !bg-black p-3">
                <Message message={message} type={t.type} />
                {t.type !== 'loading' && (
                  <button
                    className="inline-flex rounded-md "
                    onClick={() => {
                      toast.dismiss();
                    }}
                    type="button"
                  >
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
