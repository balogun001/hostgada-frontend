'use client';

import {
  PendingIcon,
  TotalEarningIcon,
  TotalEventsIcon,
  TotalTicketsIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from '@asset/icons';
import Card from '@components/Card';
import SaleDetails from '@components/dashboard/SaleDetails';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import React from 'react';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Wrapper dashboard>
      <Title dashboard>Analytics</Title>
      <div className="w-full gap-4 text-gray-600 grid sm:grid-cols-2 lg:grid-cols-4 py-6">
        <Card className="min-h-40">
          <div className="flex justify-between ">
            <div>
              <BodyText>Total Events</BodyText>
              <Title dashboard>40,689</Title>
            </div>
            <TotalEventsIcon className="text-6xl" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon />
            <div className="flex gap-1">
              <BodyText className="text-green-500">8.5%</BodyText>
              <BodyText>Up from yesterday</BodyText>
            </div>
          </div>
        </Card>
        <Card className="min-h-40">
          <div className="flex justify-between">
            <div>
              <BodyText>Total Tickets Order</BodyText>
              <Title dashboard>0</Title>
            </div>
            <TotalTicketsIcon className="text-6xl" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUpIcon />
            <div className="flex gap-1">
              <BodyText className="text-green-500">8.5%</BodyText>
              <BodyText>Up from yesterday</BodyText>
            </div>
          </div>
        </Card>
        <Card className="min-h-40">
          <div className="flex justify-between">
            <div>
              <BodyText>Total Earnings</BodyText>
              <Title dashboard>40,689</Title>
            </div>
            <TotalEarningIcon className="text-6xl" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingDownIcon />
            <div className="flex gap-1">
              <BodyText className="text-red-500">8.5%</BodyText>
              <BodyText>Down from yesterday</BodyText>
            </div>
          </div>
        </Card>
        <Card className="min-h-40">
          <div className="flex justify-between">
            <div>
              <BodyText>Total Pending</BodyText>
              <Title dashboard>40</Title>
            </div>
            <PendingIcon className="text-6xl" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingDownIcon />
            <div className="flex gap-1">
              <BodyText className="text-red-500">8.5%</BodyText>
              <BodyText>Down from yesterday</BodyText>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <Title dashboard>Sale Details</Title>
        <SaleDetails />
      </Card>
      <div className="w-full gap-4 text-gray-600 grid sm:grid-cols-2 lg:grid-cols-3 py-6">
        <Link href={Pages.hostDashboardEventPerformance}>
          <Card className="space-y-4 pb-8">
            <BodyText className="text-p3 font-bold">Event Performance</BodyText>
            <BodyText className="text-sm">
              Click to know how well your
              <br /> event is doing
            </BodyText>
          </Card>
        </Link>
        <Link href={Pages.hostDashboardAudienceBehavour}>
          <Card className="space-y-4 pb-8">
            <BodyText className="text-p3 font-bold">Audience Insights</BodyText>
            <BodyText className="text-sm">
              Click to see your audience <br /> behaviour
            </BodyText>
          </Card>
        </Link>
        <Card className="space-y-4 pb-8">
          <BodyText className="text-p3 font-bold">Financial Overview</BodyText>
          <BodyText className="text-sm">
            This gives you a financial <br /> overview
          </BodyText>
        </Card>
      </div>
    </Wrapper>
  );
}

export default page;
