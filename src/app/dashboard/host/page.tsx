'use client';

import { CheckBoxIcon, EmptyBookingIcon, EmptyEventIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import Card from '@components/Card';
import Inventory from '@components/dashboard/Inventory';
import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { useState } from 'react';
import Motion from 'src/layout/motion';

function EmptyEventCard() {
  return (
    <div className="w-full">
      <Card className="p-8">
        <BodyText className="!text-h4">Your Next Event</BodyText>
        <div className="flex items-center gap-8 pt-10 flex-wrap">
          <EmptyEventIcon className="w-56 h-40" />
          <div className="space-y-4 max-w-96">
            <Title dashboard>No Events Yet</Title>
            <BodyText>
              Start hosting and bring your ideas to life! Click the button below
              to create your first event and begin your journey as a top-rated
              host.
            </BodyText>
            <Button size="lg" kinds="tertiary">
              Create New Event
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function EventCard() {
  return (
    <div className="w-full">
      <Card className="p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <BodyText className="!text-h4">Your Next Event</BodyText>
          <Button
            kinds="tertiary"
            className="!bg-transparent !text-gray-600 border !border-gray-600"
          >
            See all
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 pt-10">
          <Card className="!bg-gray-300 text-gray-600">
            <div className="flex justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <Image
                  src={landingPage}
                  alt="image"
                  className="w-24 h-20 rounded-lg object-cover"
                />
                <div className="">
                  <BodyText className="font-bold">Spur Gathering</BodyText>
                  <BodyText>
                    <span className="text-red-500 pr-2">On sale</span>Nov 24,
                    2024
                  </BodyText>
                  <BodyText>04:00pm</BodyText>
                </div>
              </div>

              <div className="space-y-2">
                <BodyText className="font-bold">Tickets sold</BodyText>
                <BodyText>0/50</BodyText>
              </div>
            </div>
          </Card>
          <Card className="!bg-gray-300 text-gray-600">
            <div className="flex justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <Image
                  src={landingPage}
                  alt="image"
                  className="w-24 h-20 rounded-lg object-cover"
                />
                <div className="">
                  <BodyText className="font-bold">Spur Gathering</BodyText>
                  <BodyText>
                    <span className="text-red-500 pr-2">On sale</span>Nov 24,
                    2024
                  </BodyText>
                  <BodyText>04:00pm</BodyText>
                </div>
              </div>

              <div className="space-y-2">
                <BodyText className="font-bold">Tickets sold</BodyText>
                <BodyText>0/50</BodyText>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
function Host() {
  const [empty, setEmpty] = useState(true);

  const handleClick = () => {
    setEmpty((prev) => !prev);
  };

  return (
    <Motion>
      <Wrapper dashboard>
        <Title dashboard>Dashboard</Title>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-4" onClick={handleClick}>
            <Inventory />
            <section>{empty ? <EmptyEventCard /> : <EventCard />}</section>
          </div>
          {empty ? (
            <div className="w-full md:max-w-72 space-y-4">
              <Card>
                <BodyText>Your Checklist</BodyText>
                <div className="py-4 space-y-3">
                  <div className="flex gap-2">
                    <CheckBoxIcon className="text-3xl" />
                    <div className="space-y-2">
                      <BodyText className="font-bold">
                        Host an Occasion
                      </BodyText>
                      <BodyText>
                        Publish an event to reach to your targeted audience
                      </BodyText>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckBoxIcon className="text-3xl" />
                    <div className="space-y-2">
                      <BodyText className="font-bold">
                        Host an Occasion
                      </BodyText>
                      <BodyText>
                        Publish an event to reach to your targeted audience
                      </BodyText>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckBoxIcon className="text-3xl" />
                    <div className="space-y-2">
                      <BodyText className="font-bold">
                        Host an Occasion
                      </BodyText>
                      <BodyText>
                        Publish an event to reach to your targeted audience
                      </BodyText>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="text-gray-500">
                <BodyText className="font-semibold">Pending Booking</BodyText>
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-2 p-4">
                  <EmptyBookingIcon className="text-5xl" />
                  <BodyText>
                    You would see your request bookings for approvals here
                  </BodyText>
                </div>
              </Card>
            </div>
          ) : (
            <div className="w-full md:max-w-72">
              <Card className="text-gray-500">
                <div className="flex items-center justify-between">
                  <BodyText>Pending Booking</BodyText>
                  <Button
                    kinds="tertiary"
                    size="sm"
                    className="!bg-transparent !text-gray-600 border !border-gray-600"
                  >
                    See all
                  </Button>
                </div>
                <div className="py-6">
                  <div className="flex items-center gap-4">
                    <Image
                      className="w-14 h-20 rounded-lg object-cover"
                      src={landingPage}
                      alt="eventImage"
                    />
                    <div className="space-y-2">
                      <div>
                        <BodyText>Catherine Sandra</BodyText>
                        <BodyText>2x Platinum tickets</BodyText>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          kinds="tertiary"
                          size="xsm"
                          className="!bg-transparent !text-gray-600 border !border-gray-600"
                        >
                          View Profile
                        </Button>
                        <Button size="xsm" kinds="tertiary">
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Host;
