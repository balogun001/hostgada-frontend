import {
  TotalEarningIcon,
  TotalEventsIcon,
  TotalTicketsIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from '@asset/icons';
import Card from '@components/Card';
import { BodyText, Title } from '@ui/Text';
import React from 'react';

function Inventory() {
  return (
    <div className="w-full gap-4 text-gray-600 grid sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}

export default Inventory;
