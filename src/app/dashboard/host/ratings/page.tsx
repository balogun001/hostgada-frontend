'use client';

import { reviewResponsive } from '@components/BreakPoints';
import Card from '@components/Card';
import EventCard from '@components/EventCard';
import FilterDropDown from '@components/FilterDropDown';
import ScrollsButton from '@components/ScrollsButton';
import StarRating from '@components/StarRating';
import { useWindowSize } from '@hook/useWindowSize';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Events from 'src/dummyEvents.json';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Page() {
  const carouselRef = useRef<any>(null);
  const { width } = useWindowSize();

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
  return (
    <Motion>
      <Wrapper dashboard>
        <div>
          <Title dashboard>Ratings</Title>
          <Card className="max-w-[359px] space-y-1">
            <BodyText>
              You are a <span className="text-orange-500">5 star</span> host
            </BodyText>
            <StarRating ratingValue={5} readOnly />
            <BodyText className="pt-10 text-sm w-[80%] text-gray-500">
              This metric is based on your audience reviews{' '}
            </BodyText>
          </Card>
          <div className="flex items-center justify-between py-6">
            <Title dashboard>Revised</Title>
            <div className="flex items-center gap-4">
              <FilterDropDown />
              {width > 650 && (
                <ScrollsButton
                  onLeftClick={handleLeftClick}
                  onRightClick={handleRightClick}
                />
              )}
            </div>
          </div>
          <Carousel
            ref={carouselRef}
            responsive={reviewResponsive}
            autoPlay={width < 650}
            autoPlaySpeed={3000}
            infinite
            removeArrowOnDeviceType={[
              'tablet',
              'mobile',
              'desktop',
              'superLargeDesktop',
            ]}
          >
            {Events.map((event) => (
              <div key={event.id} className="w-[100%] sm:w-[95%] h-[400px]">
                <Link href={`${Pages.hostDashboardReviews}/${event.id}`}>
                  <EventCard soldOut className="!bg-white" {...event} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
