'use client';

import { Fragment, ReactNode } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  header?: ReactNode;
  reset?: () => void;
  isCentered?: boolean;
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  header,
  reset,
  isCentered = true,
}: Props) {
  const handleClose = () => {
    if (typeof reset === 'function') reset();
    if (typeof onClose === 'function') onClose();
  };
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10">
          <div
            className={classNames(
              `flex h-full justify-center overflow-hidden md:p-4`,
              { 'lg:items-center': isCentered }
            )}
          >
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={classNames(
                  'relative flex max-h-full w-full max-w-lg transform flex-col rounded-lg bg-gray-50 p-4 shadow-xl transition-all',
                  className
                )}
              >
                <div>{header}</div>
                <div className="h-max max-h-full overflow-y-scroll">
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
