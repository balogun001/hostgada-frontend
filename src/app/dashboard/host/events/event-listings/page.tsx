'use client';

import EventCard from '@components/EventCard';
import React from 'react';
import Pages from 'src/routes/page.routes';
import Events from 'src/dummyEvents.json';
import { useRouter } from 'next/navigation';
import { Title } from '@ui/Text';
import { Button } from '@ui/Button';
import FilterDropDown from '@components/FilterDropDown';
import Motion from 'src/layout/motion';

function Page() {
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`${Pages.hostDashboardEditEvents}/${id}`);
  };

  return (
    <Motion>
      <div className="bg-orange-50 p-4 sm:p-8">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Title dashboard>My Events</Title>
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <FilterDropDown />
            <Button size="lg" kinds="tertiary">
              Host People
            </Button>
          </div>
        </div>
        <div className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 sm:py-8 sm:gap-8 ">
          {Events.map((event: any) => (
            <EventCard
              key={event.id}
              handleEdit={() => handleEdit(event.id)}
              className="!bg-white"
              {...event}
            />
          ))}
        </div>
      </div>
    </Motion>
  );
}

export default Page;
