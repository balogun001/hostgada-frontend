'use client';

import EventCard from '@components/EventCard';
import { Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import React from 'react';
import Events from 'src/dummyEvents.json';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Motion>
      <Wrapper dashboard>
        <Title dashboard>Event Performance</Title>
        <div className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 sm:py-8 sm:gap-8 ">
          {Events.map((event: any) => (
            <Link
              key={event.id}
              href={`${Pages.hostDashboardEventPerformanceEvent}/${event.id}`}
            >
              <EventCard soldOut className="!bg-white" {...event} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
