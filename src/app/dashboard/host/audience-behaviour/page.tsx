'use client';

import { ChevronLeftIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import ProgressBar from '@ramonak/react-progress-bar';
import { Button } from '@ui/Button';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Motion from 'src/layout/motion';

const demographics = [
  { stat: '18-24', completed: 90 },
  { stat: '25-34', completed: 70 },
  { stat: '35-44', completed: 50 },
  { stat: '45-54', completed: 30 },
  { stat: 'Male', completed: 20 },
  { stat: 'Female', completed: 60 },
  { stat: 'Returning Audience', completed: 80 },
  { stat: 'New Audience', completed: 40 },
];

function Page() {
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
            <BodyText>House Party | Nov 24, 2024 | 9:00AM GMT+1</BodyText>
            <Button
              kinds="tertiary"
              className="!bg-transparent !text-gray-600 border !border-gray-600"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" /> On site
            </Button>
          </div>
        </div>
        <div>
          <Title dashboard>Demograph</Title>
          <div className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demographics.map(({ stat, completed }) => (
              <div key={stat} className="flex items-center gap-2 w-full">
                <div className="w-40">
                  <BodyText>{stat}</BodyText>
                </div>
                <div className="w-full max-w-[200px]">
                  <ProgressBar
                    bgColor="#FE791B"
                    baseBgColor="transparent"
                    height="8px"
                    completed={completed}
                    maxCompleted={100}
                    isLabelVisible={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
