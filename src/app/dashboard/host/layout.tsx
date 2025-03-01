'use client';

import {
  AnalyticsNavIcon,
  BookingsNavIcon,
  ClockNavIcon,
  EventsNavIcon,
  HelpNavIcon,
  LogoutNavIcon,
  PowerIcon,
  RatingNavIcon,
  SettingsNavIcon,
  WalletNavIcon,
} from '@asset/icons';
import HostgadaIcon from '@asset/icons/HostgadaIcon';
import HostHeader from '@components/dashboard/DashboardHeader';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { BodyText } from '@ui/Text';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Layout({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState(Pages.hostDashboard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const links = [
    { icon: ClockNavIcon, name: 'Dashboard', href: Pages.hostDashboard },
    { icon: EventsNavIcon, name: 'My Events', href: Pages.hostDashboardEvents },
    {
      icon: BookingsNavIcon,
      name: 'Bookings',
      href: Pages.hostDashboardBookings,
    },
    { icon: WalletNavIcon, name: 'Wallet', href: Pages.hostDashboardWallet },
    {
      icon: AnalyticsNavIcon,
      name: 'Analytics',
      href: Pages.hostDashboardAnalytics,
    },
    {
      icon: RatingNavIcon,
      name: 'My Ratings',
      href: Pages.hostDashboardRatings,
    },
    {
      icon: SettingsNavIcon,
      name: 'Settings',
      href: Pages.hostDashboardSettings,
    },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <Motion>
      <Modal onClose={closeModal} isOpen={isModalOpen}>
        <div className="flex flex-col items-center space-y-6 text-center gap-8 p-4">
          <div className="bg-gray-300 rounded-full overflow-hidden">
            <PowerIcon className="text-7xl" />
          </div>
          <BodyText className="text-p3 font-bold">
            {' '}
            Are you sure you want to <br /> Log Out?
          </BodyText>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Button className="!px-16">Yes</Button>
            <Button onClick={closeModal} className="!px-16" kinds="tertiary">
              No
            </Button>
          </div>
        </div>
      </Modal>
      <div className="w-full h-screen flex overflow-hidden">
        {/* Sidebar */}
        <div className="hidden xl:w-[20%] 2xl:w-[15%] lg:flex flex-col shadow-xl bg-white h-full">
          <div className="flex justify-center items-center my-8">
            <Link href="/">
              <HostgadaIcon />
            </Link>
          </div>
          <div className="flex-1 overflow-hidden">
            <ul>
              {links.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <li className="group relative mr-8" key={link.name}>
                    <Link
                      href={link.href}
                      className={classNames(
                        'flex items-center ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                        {
                          'text-white bg-orange-500': isActive,
                        }
                      )}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <link.icon />
                      <p className="mx-4">{link.name}</p>
                    </Link>
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-500 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>
              <li className="group relative mr-8">
                <Link
                  href={Pages.faq}
                  className={classNames(
                    'flex items-center md:ml-4 lg:ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                    {
                      'text-white bg-orange-500': activeLink === '/help',
                    }
                  )}
                  onClick={() => handleLinkClick('/help')}
                >
                  <HelpNavIcon />
                  <p className="mx-4 block md:hidden lg:block">Help Center</p>
                </Link>
                {activeLink === '/help' && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-600 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                )}
              </li>

              <li className="group relative mr-8">
                <div
                  onClick={openModal}
                  className={classNames(
                    'flex items-center md:ml-4 lg:ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                    {
                      'text-white bg-orange-500': activeLink === '/logout',
                    }
                  )}
                >
                  <LogoutNavIcon />
                  <p className="mx-4 block md:hidden lg:block">Logout</p>
                </div>
                {activeLink === '/logout' && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-600 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full xl:w-[80%] 2xl:w-[85%] flex flex-col h-full overflow-hidden">
          <HostHeader />
          <main className="bg-gray-200 w-full h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </Motion>
  );
}

export default Layout;
