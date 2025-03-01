'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import CustomPopover from '@ui/PopOver';
import { SideDrawer } from '@ui/SideDrawer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import HostgadaIcon from 'src/assets/icons/HostgadaIcon';
import SearchIcon from 'src/assets/icons/SearchIcon';
import SettingsIcon from 'src/assets/icons/SettingIcon';
import Pages from 'src/routes/page.routes';

function Header() {
  const DiscoverLinks = [
    {
      title: 'Featured',
      items: [
        { href: '/', label: 'Trending' },
        { href: '/', label: 'Around the Corner' },
        { href: '/', label: 'Upcoming' },
        { href: '/', label: 'Location' },
      ],
    },
    {
      title: 'Categories',
      items: [
        { href: '/', label: 'Music & Parties' },
        { href: '/', label: 'Workshops & Classes' },
        { href: '/', label: 'Food & Drink Gatherings' },
        { href: '/', label: 'Charity Events' },
      ],
    },
    {
      title: 'Personalized',
      items: [
        { href: '/', label: 'For you' },
        { href: '/', label: 'Workshop' },
      ],
    },
    {
      title: 'Host',
      items: [
        { href: '/', label: 'Verified Host' },
        { href: '/', label: 'Top Rated Host' },
        { href: '/', label: 'New Host to follow' },
        { href: '/', label: 'Most booked' },
      ],
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="w-full text-p1 bg-white rounded-full">
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-6">
          <Link href="/">
            <HostgadaIcon />
          </Link>
          <div className="lg:flex space-x-4 max-lg:hidden">
            <Link href={Pages.homePage}>
              <span className="transition-all duration-500 ease-in-out mt-1 hover:text-orange-700">
                Home
              </span>
            </Link>
            <CustomPopover
              buttonText="Discover"
              links={DiscoverLinks}
              className="max-w-sm"
            />
            <Link href={Pages.bookings}>
              <span className="transition-all duration-500 ease-in-out mt-1 hover:text-orange-700">
                Bookings
              </span>
            </Link>
          </div>
        </div>
        <span className="lg:hidden" onClick={toggleSidebar}>
          <HiMenuAlt4 className="text-orange-700" />
        </span>

        <div className="lg:flex max-lg:hidden ">
          <Input
            rounded
            className="w-[400px] 2xl:w-[700px]"
            intent="fill"
            placeholder="Search..."
            leftIcon={<SearchIcon className="text-orange-500" />}
            rightIcon={<SettingsIcon />}
          />
        </div>

        <div className="lg:flex items-center text-p2 space-x-4 max-lg:hidden">
          <Link href={Pages.hostPeople}>
            <span className="transition-all duration-500 ease-in-out mt-1 hover:text-orange-700">
              Host people
            </span>
          </Link>
          <Link href={Pages.signin}>
            <span className="transition-all duration-500 ease-in-out mt-1 hover:text-orange-700">
              Log in
            </span>
          </Link>
          <Link href={Pages.onBoarding}>
            <Button size="md" kinds="tertiary">
              {' '}
              Sign Up
            </Button>
          </Link>
        </div>

        <SideDrawer open={sidebarOpen} onClose={toggleSidebar} position="right">
          <div className="flex flex-col items-center justify-center gap-2 text-white text-p1 mx-2 mt-10">
            <div className="flex flex-col gap-4">
              <Link href={Pages.onBoarding}>
                <Button size="lg" kinds="tertiary">
                  {' '}
                  Sign Up
                </Button>
              </Link>
              <Link href={Pages.signin}>
                <span className="transition-all duration-500 ease-in-out mt-1">
                  Log in
                </span>
              </Link>
              <Link href={Pages.hostPeople}>
                <span className="transition-all duration-500 ease-in-out mt-1">
                  Host people
                </span>
              </Link>
              {/* {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span className="transition-all duration-500 ease-in-out mt-1">
                    {link.name}
                  </span>
                </Link>
              ))} */}
            </div>
          </div>
        </SideDrawer>
      </nav>
    </header>
  );
}

export default Header;
