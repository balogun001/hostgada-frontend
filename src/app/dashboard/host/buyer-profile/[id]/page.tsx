'use client';

import {
  CancelIcon,
  ChevronLeftIcon,
  DoubleQuotesIcon,
  StarIcon,
} from '@asset/icons';
import { landingPage } from '@asset/images';
import { reviewResponsive } from '@components/BreakPoints';
import Card from '@components/Card';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { BodyText, Title } from '@ui/Text';
import { TextArea } from '@ui/Textarea';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

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
    review: 'Amazing experience! Would highly recommend to others.',
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
  const [toggleButton, setToggleButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Motion>
      <Modal className="!bg-white" isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4 space-y-4">
          <div className="flex justify-between">
            <div className="space-y-2">
              <BodyText className="text-p3 font-bold">
                Share your view!
              </BodyText>
              <BodyText className="text-gray-400">
                Kindly share your opinion about the occasion
              </BodyText>
            </div>
            <div className="cursor-pointer" onClick={closeModal}>
              <CancelIcon className="text-6xl" />
            </div>
          </div>
          <TextArea label="Description" />

          <Button>Submit</Button>
        </div>
      </Modal>
      <div className="w-full" />
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2 py-4">
          <ChevronLeftIcon />
          <Link href={Pages.hostDashboardBookings}>
            <BodyText>Back</BodyText>
          </Link>
        </div>
        <Title dashboard>Buyer Profile</Title>
        <div className="flex flex-col xl:flex-row items-start justify-between py-4 gap-6">
          <div className="flex gap-8">
            <Image
              src={landingPage}
              alt="image"
              width={95}
              height={95}
              className="h-24 w-24 rounded-full"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="text-gray-500">
                <BodyText className="font-bold">Name</BodyText>
                <BodyText>Sandra Catherer</BodyText>
              </div>
              <div className="text-gray-500">
                <BodyText className="font-bold">Address</BodyText>
                <BodyText>25 Catherine Sandra, Eko Ale</BodyText>
              </div>
              <div className="text-gray-500">
                <BodyText className="font-bold">Email</BodyText>
                <BodyText>thejjdnkshfj@gmial.com</BodyText>
              </div>
              <div className="text-gray-500">
                <BodyText className="font-bold">Phone Number</BodyText>
                <BodyText>09876542234</BodyText>
              </div>
              <div className="text-gray-500">
                <BodyText className="font-bold">Joined Hostgada</BodyText>
                <BodyText>1 year ago</BodyText>
              </div>
            </div>
          </div>
          {toggleButton ? (
            <Button onClick={openModal} size="sm" kinds="tertiary">
              Add Review
            </Button>
          ) : (
            <div className="space-y-2">
              <div>
                <BodyText className="font-bold text-gray-500">
                  2x Platinum tickets
                </BodyText>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  kinds="tertiary"
                  size="sm"
                  className="!bg-transparent !text-gray-600 border !border-gray-600"
                >
                  Decline
                </Button>
                <Button
                  onClick={() => setToggleButton(true)}
                  size="sm"
                  kinds="tertiary"
                >
                  Approve
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full py-4 space-y-6">
          <Title dashboard>Reviews and Ratings</Title>
          <Carousel
            responsive={reviewResponsive}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            removeArrowOnDeviceType={[
              'tablet',
              'mobile',
              'desktop',
              'superLargeDesktop',
            ]}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-[350px] h-[320px]">
                <Card className="h-full text-gray-500">
                  <div className="space-y-10 p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          src={review.image}
                          alt="image"
                          className="rounded-full h-7 w-7"
                        />
                        <BodyText className="text-p2">{review.name}</BodyText>
                      </div>
                      <DoubleQuotesIcon />
                    </div>
                    <BodyText>{review.review}</BodyText>
                    <div className="flex gap-2">
                      {[...Array(review.rating)].map((_, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
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
