'use client';

import { ChevronLeftIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { Button } from '@ui/Button';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Motion from 'src/layout/motion';

function page() {
  return (
    <Motion>
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2 py-4">
          <ChevronLeftIcon />
          <BodyText>Back</BodyText>
        </div>
        <div className="py-10 flex flex-col xl:flex-row items-center gap-8">
          <div className="h-48 w-72 flex items-center border border-gray-300 rounded-md p-4">
            <Image src={landingPage} alt="image" className="rounded-md" />
          </div>
          <div className="space-y-4">
            <div className="max-w-sm">
              <BodyText className="font-bold !text-p3">
                Full Moon Ceremony ~ Native Flute Meditation and Shamanic
              </BodyText>
            </div>
            <BodyText>House Party | Nov 24,2024 | 9:00AM GMT+1</BodyText>
            <Button
              kinds="tertiary"
              className="!bg-transparent !text-gray-600 border !border-gray-600"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" /> On site
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <BodyText className="text-p3 font-semibold">
              Sales Breakdown
            </BodyText>
            <div className="w-full xl:w-[90%] rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">Gross Sales</BodyText>
                <BodyText className="font-bold mb-4">
                  $ <span className="ml-2">200,000</span>
                </BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">Net Sales</BodyText>
                <BodyText className="font-bold mb-4">
                  $ <span className="ml-2">200,000</span>
                </BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">
                  Number of pass sold
                </BodyText>
                <BodyText className="font-bold mb-4">
                  $ <span className="ml-2">200,000</span>
                </BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">
                  Number of pass unsold
                </BodyText>
                <BodyText className="font-bold mb-4">
                  $ <span className="ml-2">200,000</span>
                </BodyText>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <BodyText className="text-p3 font-semibold">Reach</BodyText>
            <div className="w-full xl:w-[90%] rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 ">
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">
                  Total Number of views
                </BodyText>
                <BodyText className="font-bold mb-4">100</BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">
                  Total Number Clicks
                </BodyText>
                <BodyText className="font-bold mb-4">100</BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">Reach from Link</BodyText>
                <BodyText className="font-bold mb-4">100</BodyText>
              </div>
              <div className="w-full border border-gray-300 rounded-md p-4">
                <BodyText className="text-gray-400">Conversion rate</BodyText>
                <BodyText className="font-bold mb-4">100</BodyText>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
