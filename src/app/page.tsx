'use client';

import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { LocationImage } from 'src/assets/images';
import EventCard from 'src/components/EventCard';
import Header from 'src/components/Header';
import ScrollsButton from 'src/components/ScrollsButton';
import { useWindowSize } from 'src/hooks/useWindowSize';
import Pages from 'src/routes/page.routes';
import Events from 'src/dummyEvents.json';
import Places from 'src/dummyPlaces.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PlacesResponsive, responsive } from 'src/components/BreakPoints';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import FilterDropDown from 'src/components/FilterDropDown';
import HostCard from 'src/components/HostCard';
import Footer from 'src/components/Footer';
import ProgressBar from '@ramonak/react-progress-bar';
import Motion from 'src/layout/motion';

export default function Home() {
  const { width } = useWindowSize();

  const carouselRef1 = useRef<any>(null);
  const carouselRef2 = useRef<any>(null);
  const carouselRef3 = useRef<any>(null);
  const carouselRef4 = useRef<any>(null);

  // Handlers for Carousel 1
  const handleLeftClick1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.previous();
    }
  };

  const handleRightClick1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.next();
    }
  };

  // Handlers for Carousel 2
  const handleLeftClick2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.previous();
    }
  };

  const handleRightClick2 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.next();
    }
  };

  // Handlers for Carousel 3
  const handleLeftClick3 = () => {
    if (carouselRef3.current) {
      carouselRef3.current.previous();
    }
  };

  const handleRightClick3 = () => {
    if (carouselRef3.current) {
      carouselRef3.current.next();
    }
  };

  // Handlers for Carousel 4
  const handleLeftClick4 = () => {
    if (carouselRef4.current) {
      carouselRef4.current.previous();
    }
  };

  const handleRightClick4 = () => {
    if (carouselRef4.current) {
      carouselRef4.current.next();
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPlaces = Places.length;
  const progressPercentage = ((currentIndex + 1) / totalPlaces) * 100;

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Motion>
      {/* First Section */}
      <section>
        <div
          className="w-full h-[700px] 2xl:h-[900px] bg-center m-0 flex flex-col justify-between"
          style={{
            backgroundImage: "url('/landingOverviewImage.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <div className="w-full p-4">
            <Header />
          </div>

          <div className="text-white m-10 max-w-[550px] space-y-4">
            <Title className="text-orange-100">
              Host. Connect. <span className="text-orange-900">Earn.</span>
            </Title>
            <BodyText>
              Turn your passion for hosting into a rewarding experience! Create
              unforgettable gatherings, connect with vibrant communities, and
              earn while doing what you love.
            </BodyText>
            <Link href={Pages.discover}>
              <Button className="mt-6 !px-0">
                <span className="flex items-center gap-6 pl-4 pr-1">
                  Explore Experience{' '}
                  <Image
                    width={40}
                    height={40}
                    src={LocationImage}
                    alt="icon"
                  />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel 1 */}
      <section>
        <Wrapper>
          <div className="sm:flex items-center justify-between mb-5 mt-10">
            <HeaderText
              header="Just Around the Corner"
              subtext="These are occasions happening soon."
            />
            {width > 650 && (
              <ScrollsButton
                onLeftClick={handleLeftClick1}
                onRightClick={handleRightClick1}
              />
            )}
          </div>
        </Wrapper>
        <div className="px-4 sm:pl-8 xl:pl-20">
          <Carousel
            ref={carouselRef1}
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
      </section>

      {/* Carousel 2 */}
      <section>
        <Wrapper>
          <div className="sm:flex items-center justify-between mb-5 mt-10">
            <div>
              <h1 className="text-h4 flex items-center gap-2">
                Trending in: <span className="text-orange-700">Lagos</span>
                <FaChevronDown className="text-orange-700" size={20} />
              </h1>
              <p className="text-p1">These are occasions happening soon.</p>
            </div>
            <div className="flex items-center">
              <FilterDropDown />
              {width > 650 && (
                <ScrollsButton
                  onLeftClick={handleLeftClick2}
                  onRightClick={handleRightClick2}
                />
              )}
            </div>
          </div>
          <hr className="text-gray-300 my-8" />
        </Wrapper>
        <div className="px-4 sm:pl-8 xl:pl-20">
          <Carousel
            ref={carouselRef2}
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
                <EventCard {...event} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Carousel 3 */}
      <section>
        <Wrapper>
          <div className="sm:flex items-center justify-between mb-5 mt-10">
            <HeaderText header="Recommendations based on your interest" />
            {width > 650 && (
              <ScrollsButton
                onLeftClick={handleLeftClick3}
                onRightClick={handleRightClick3}
              />
            )}
          </div>
          <hr className="text-gray-300 my-8" />
        </Wrapper>
        <div className="px-4 sm:pl-8 xl:pl-20">
          <Carousel
            ref={carouselRef3}
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
                <EventCard {...event} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section>
        <Wrapper className="mt-5">
          <HeaderText
            className="py-5"
            header="Top-rated Host"
            subtext="Follow the organizers from these events and get notified when they create new ones."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2 flex-wrap">
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <div className="flex flex-col items-center my-10 space-y-4">
            <HeaderText
              className="text-center !max-w-[649px]"
              header="Earn income making memorable experience with your friends, family and guest"
              subtext="Share your occasion on our platform to reach a more global audience, Make money while hosting people at your social gathering "
            />
            <Button size="lg">Start Earning</Button>
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 py-2 flex-wrap">
            <div className="h-[555px] flex flex-col gap-4">
              <div
                className="h-[60%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />

              <div
                className="h-[40%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />
            </div>
            <div className="h-[555px] flex flex-col gap-4">
              <div
                className="h-[40%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />

              <div
                className="h-[60%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />
            </div>
            <div className="h-[555px] flex flex-col gap-4">
              <div
                className="h-[60%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />

              <div
                className="h-[40%] bg-cover bg-center m-0 flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/landingPage.webp')",
                  borderRadius: 20,
                }}
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <div className="bg-gray-300 w-full rounded-md p-6 my-10">
            <div className="sm:flex items-center justify-between my-5">
              <HeaderText
                className="!max-w-[500px]"
                header="Experience the Vibe, Anywhere You Are!"
              />
              <div className="flex items-center gap-4">
                <BodyText className="!text-orange-700 !text-p3 !font-semibold">
                  See all
                </BodyText>
                {width > 650 && (
                  <ScrollsButton
                    onLeftClick={handleLeftClick4}
                    onRightClick={handleRightClick4}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center">
              <Carousel
                ref={carouselRef4}
                responsive={PlacesResponsive}
                infinite
                autoPlay={width < 650}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={[
                  'tablet',
                  'mobile',
                  'desktop',
                  'smallDestop',
                  'superLargeDesktop',
                ]}
                afterChange={(currentSlide) => setCurrentIndex(currentSlide)}
              >
                {Places.map((place, index) => (
                  <Link
                    key={place.id}
                    href={`${Pages.eventsLocation}/${place.id}`}
                  >
                    <div
                      onClick={() => handleCardClick(index)}
                      className="w-[100%] sm:w-[90%] h-[357px] bg-cover bg-center m-0 p-4 flex flex-col justify-between"
                      style={{
                        backgroundImage: "url('/landingPage.webp')",
                        borderRadius: 20,
                      }}
                    >
                      <div className="flex-grow" />
                      <div>
                        <BodyText className="!text-white !font-semibold">
                          {place.city}
                        </BodyText>
                        <BodyText>{place.country}</BodyText>
                      </div>
                    </div>
                  </Link>
                ))}
              </Carousel>
              <div className="my-10">
                <ProgressBar
                  bgColor="#E45F01"
                  baseBgColor="#FFF0E6"
                  height="10px"
                  completed={progressPercentage}
                  maxCompleted={100}
                  isLabelVisible={false}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <footer>
        <Footer />
      </footer>
    </Motion>
  );
}
