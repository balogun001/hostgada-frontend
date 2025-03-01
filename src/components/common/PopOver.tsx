/* eslint-disable react/no-array-index-key */
import React, { Fragment, useState } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';

type LinkItem = { href: string; label: string };
type CustomPopoverProps = {
  buttonText: string;
  links: { title: string; items: LinkItem[] }[];
  className?: string;
  buttonClassName?: string;
  panelClassName?: string;
};

function CustomPopover({
  buttonText,
  links,
  className,
  buttonClassName,
  panelClassName,
}: CustomPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <Popover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames('relative', className)}
    >
      <PopoverButton
        className={classNames(
          'appearance-none focus:outline-none hover:text-orange-700',
          buttonClassName
        )}
      >
        {buttonText}
      </PopoverButton>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <PopoverPanel
          className={classNames(
            'absolute mt-10 bg-white w-[1000px] shadow-lg rounded-xl p-8 flex gap-10 z-50',
            panelClassName
          )}
        >
          {links.map((link, index) => (
            <div key={index} className="flex-1 flex flex-col items-start">
              <p className="font-semibold text-md mb-2">{link.title}</p>
              {link.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.href}
                  className="hover:underline py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

export default CustomPopover;
