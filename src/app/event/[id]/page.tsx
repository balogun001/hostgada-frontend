'use client';

import { CheckIcon, RadioIcon, VerifiedIcon } from '@asset/icons';
import LocationIcon from '@asset/icons/LocationIcon';
import StarIcon from '@asset/icons/StarIcon';
import { landingPage, MapImage, OnboardingOne } from '@asset/images';
import { responsive } from '@components/BreakPoints';
import EventCard from '@components/EventCard';
import ScrollsButton from '@components/ScrollsButton';
import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { Input } from '@ui/Input';
import { Modal } from '@ui/Modal';
import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Events from 'src/dummyEvents.json';
import { useWindowSize } from 'src/hooks/useWindowSize';
import Layout from 'src/layout';
import Pages from 'src/routes/page.routes';
import specialFeatures from '../../../dummyFeatures.json';

interface EventProps {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  eventType: string;
  price: number;
  isSoldOut: boolean;
}

interface EventPageProps {
  params: { id: string };
}

export default function EventPage({ params }: EventPageProps) {
  const numericId = parseInt(params.id, 10);
  const FoundItem = Events.find((event: EventProps) => event.id === numericId);
  const { width } = useWindowSize();
  const [guestCount, setGuestCount] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carouselRef = useRef<any>(null);

  if (!FoundItem) {
    notFound();
  }

  // Handlers for Carousel
  const handleLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleGuestCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      event.target.value === '' ? 0 : parseInt(event.target.value, 10);
    if (value === 0 || value >= 0) {
      setGuestCount(value);
    }
  };

  const incrementGuestCount = () => setGuestCount((prev) => prev + 1);
  const decrementGuestCount = () =>
    setGuestCount((prev) => Math.max(1, prev - 1));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <Modal
        className="m-5 h-fit !max-w-6xl"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <div className="flex gap-4 sm:p-4">
          <div className="flex-1 hidden sm:flex ">
            <div className="w-full space-y-6 !text-gray-600 bg-white rounded-xl p-4">
              <HeaderText
                header="You are almost there!"
                subtext="We just need to confirm a few details so that your host can confirm your booking "
              />

              <div className="space-y-1">
                <HeaderText header="Number of guest" className="text-h4" />
                <Input
                  type="number"
                  label="Number of guest"
                  value={guestCount.toString()}
                  onChange={handleGuestCountChange}
                  disabled
                />
              </div>
              <div className="space-y-1">
                <HeaderText header="Entry Pass" className="text-h4" />
                <div className="border border-gray-300 w-full rounded-xl">
                  <div className="flex justify-between p-6">
                    <HeaderText
                      header="#1,500,000"
                      subtext="This entry pass gives you access to the event location"
                      className="text-h4 w-1/2"
                    />
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        kinds="tertiary"
                        className="!rounded-r-none"
                        onClick={decrementGuestCount}
                        disabled
                      >
                        -
                      </Button>
                      <span className="px-2">{guestCount}</span>
                      <Button
                        size="sm"
                        kinds="tertiary"
                        className="!rounded-l-none"
                        onClick={incrementGuestCount}
                        disabled
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <HeaderText header="Payment Method" />
              <div className="flex gap-4 pb-20">
                <div className="flex gap-4 item-center bg-gray-50 border border-gray-300 p-4 rounded-xl">
                  <RadioIcon />
                  <BodyText>Wallet</BodyText>
                </div>
                <div className="flex gap-4 bg-gray-50 border border-gray-300 rounded-xl p-4">
                  <RadioIcon />
                  <BodyText>Credit/Debit Card</BodyText>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-xl">
            <div className="w-full space-y-6">
              <Image
                src={OnboardingOne}
                alt="event image"
                className="w-full max-h-64 rounded-t-xl object-cover"
              />
            </div>
            <div className="space-y-4 p-4 sm:p-8">
              <HeaderText
                header="Full Moon Ceremony ~ Native Flute Meditation and Shamanic"
                className="!w-full"
              />
              <BodyText className="text-p2 py-2">Order Summary</BodyText>
              <div className="flex items-center justify-between">
                <BodyText>Number of guest</BodyText>
                <BodyText>2</BodyText>
              </div>
              <div className="flex items-center justify-between">
                <BodyText>Entry Pass </BodyText>
                <BodyText>2</BodyText>
              </div>
              <div className="flex items-center justify-between">
                <BodyText>Gold Ticket</BodyText>
                <BodyText>2</BodyText>
              </div>
              <Button onClick={openModal} size="lg" className="!w-full !mt-10">
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Wrapper className="sm:mt-8">
        <div className="flex flex-col md:flex-row gap-4 h-[414px]">
          <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-hidden">
            <Image
              src={landingPage}
              alt="Event image"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            <div className="w-full h-[200px] overflow-hidden">
              <Image
                src={landingPage}
                alt="Main image"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 w-full">
              <div className="w-1/2 h-[200px] overflow-hidden">
                <Image
                  src={landingPage}
                  alt="Sub image 1"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="w-1/2 h-[200px] overflow-hidden">
                <Image
                  src={landingPage}
                  alt="Sub image 2"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 sm:m-0 md:flex-row gap-4 py-4">
          <div className="flex-1">
            <HeaderText className="!max-w-[80%]" header={FoundItem.title} />
            <BodyText>
              Event Type{' '}
              <span className="px-4 text-orange-700 font-semibold">
                Kitchen Party
              </span>
            </BodyText>
            <div className="border border-gray-300 rounded-xl my-8 p-4 space-y-4">
              <h1 className="text-h4 ">About Occasion</h1>
              <BodyText className="text-gray-500 ">
                Experience the best of French cuisine with Claudine’s seasonal,
                market-fresh, 4-course dinner served in beautiful china
                tableware. In her elegant apartment, you will enjoy a fish dish
                or a chicken breasts in creamy sauce along with seasonal
                vegetables ( or a vegetarian spinach and mushrooms
                parmentier...) French cheeses, and a decadent chocolate fondant
                for dessert along with seasonal fruit.
              </BodyText>
              <BodyText className="pt-4 text-gray-500">
                With 40 years of living in Montmartre, Claudine knows the area
                inside out and is excited to share its secrets with you. This
                intimate small-group experience, limited to a maximum of 5
                guests, gives you the chance to get to know your host, enjoy a
                delicious French meal, and learn about Montmartre.
              </BodyText>
              <div className="my-6">
                <h1 className="text-h4 my-4">Special Features</h1>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {specialFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-2">
                      <CheckIcon />
                      <BodyText>{feature.feature}</BodyText>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-8 space-y-4">
              <h1 className="text-h4 my-4">About Host</h1>
              <div className="flex items-center gap-4">
                <Image
                  src={landingPage}
                  alt="host image"
                  className="h-36 w-32 object-cover"
                />
                <div className="space-y-6">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BodyText className="!font-semibold">
                        Cathrine Sandra
                      </BodyText>
                      <VerifiedIcon className="text-sm" />
                    </div>
                    <div className="flex items-center gap-2">
                      <BodyText>Caterer</BodyText>
                      <div className="flex gap-1">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                  </div>
                  <Button size="sm" kinds="tertiary">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-300 !text-gray-600 rounded-xl flex flex-col justify-between">
            <div className="m-4 sm:m-8">
              <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center">
                <HeaderText header="Entry Pass Fee" className="text-h4" />
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-center items-center gap-2">
                    <RadioIcon />
                    <HeaderText header="#1,500,000" className="text-h4" />
                  </div>
                </div>
              </div>
              <div className="bg-white w-full rounded-xl my-6">
                <div className="p-2 sm:p-8">
                  <HeaderText header="Number of guest" className="text-h4" />

                  <div className="flex items-center justify-between gap-4 py-2 ">
                    <Input
                      type="number"
                      className="w-1/2 !appearance-none"
                      label="Number of guest"
                      value={guestCount.toString()}
                      onChange={handleGuestCountChange}
                    />

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        kinds="tertiary"
                        className="!rounded-r-none"
                        onClick={decrementGuestCount}
                      >
                        -
                      </Button>
                      <span className="px-4">{guestCount}</span>
                      <Button
                        size="sm"
                        kinds="tertiary"
                        className="!rounded-l-none"
                        onClick={incrementGuestCount}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 ">
                    <div className="space-y-2 sm:w-1/2">
                      <HeaderText header="Date" className="text-h4" />
                      <Input label="Date" />
                    </div>
                    <div className="space-y-2 sm:w-1/2">
                      <HeaderText header="Time" className="text-h4" />
                      <Input label="Time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <HeaderText header="Location" className="text-h4" />
                    <div className="flex items-center gap-2">
                      <LocationIcon />
                      <BodyText>
                        Tarkwa bay beach lagos Lagos, LG 23401
                      </BodyText>
                    </div>

                    <Image src={MapImage} alt="map image" className="w-full" />
                    {/* <Map latitude={6.40148} longitude={3.39527} /> */}
                  </div>
                  <Button
                    onClick={openModal}
                    size="lg"
                    className="!w-full mt-10 sm:mt-32"
                  >
                    Book Occasion
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="sm:flex items-center justify-between mb-5 mt-10">
            <HeaderText header="Other experiences" />
            {width > 650 && (
              <ScrollsButton
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
              />
            )}
          </div>
          <hr className="text-gray-300 my-8" />
        </section>
      </Wrapper>
      <div className="px-4 sm:pl-8 xl:pl-20">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={width < 650}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={[
            'tablet',
            'mobile',
            'desktop',
            'superLargeDesktop',
          ]}
        >
          {Events.map((event) => (
            <div key={event.id} className="w-[100%] sm:w-[90%] h-[400px]">
              <Link href={`${Pages.event}/${event.id}`}>
                <EventCard {...event} />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
