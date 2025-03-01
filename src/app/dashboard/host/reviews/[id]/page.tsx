'use client';

import { ChevronLeftIcon, DoubleQuotesIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { reviewResponsive } from '@components/BreakPoints';
import Card from '@components/Card';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import Motion from 'src/layout/motion';

const reviews = [
  {
    id: 1,
    name: 'David Cath',
    image: landingPage,
    review:
      'Can you tell me a bit more about the type of review? Is it a general positive review, feedback on a project, or something specific to their work or collaboration?',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    image: landingPage,
    review:
      'Can you tell me a bit more about the type of review? Is it a general positive review, feedback on a project, or something specific to their work or collaboration?',
    rating: 4,
  },
  {
    id: 3,
    name: 'John Smith',
    image: landingPage,
    review: 'Very professional and great to work with. Highly satisfied.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Doe',
    image: landingPage,
    review: 'Good work, but there’s room for improvement in communication.',
    rating: 3,
  },
  {
    id: 5,
    name: 'Michael Brown',
    image: landingPage,
    review: 'Exceeded expectations! Great attention to detail.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Michael Brown',
    image: landingPage,
    review: 'Exceeded expectations! Great attention to detail.',
    rating: 5,
  },
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
          <Carousel
            responsive={reviewResponsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={[
              'tablet',
              'mobile',
              'desktop',
              'superLargeDesktop',
            ]}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-[320px] h-[290px] my-4">
                <Card className="h-full text-gray-700 flex flex-col justify-between p-4 ">
                  <div className="space-y-10">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          src={review.image}
                          alt="image"
                          className="rounded-full h-7 w-7"
                        />
                        <BodyText className="text-p2">{review.name}</BodyText>
                      </div>
                      <DoubleQuotesIcon className="text-3xl " />
                    </div>
                    <BodyText>{review.review}</BodyText>
                  </div>
                  <Input label="Respond" className="mt-auto" />
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
