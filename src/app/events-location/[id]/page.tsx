'use client';

import EventCard from '@components/EventCard';
import FilterDropDown from '@components/FilterDropDown';
import ScrollsButton from '@components/ScrollsButton';
import { useWindowSize } from '@hook/useWindowSize';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import Events from 'src/dummyEvents.json';
import Places from 'src/dummyPlaces.json';
import Layout from 'src/layout';
import Pages from 'src/routes/page.routes';

interface EventsLocationProps {
  params: { id: string };
}
function Page({ params }: EventsLocationProps) {
  const { width } = useWindowSize();
  const numericId = parseInt(params.id, 10);
  const FoundItem = Places.find((place: any) => place.id === numericId);
  console.log(FoundItem);
  return (
    <Layout>
      <Wrapper className="sm:mt-8">
        <div
          className="w-full min-h-[500px] bg-center m-0 flex flex-col justify-end text-orange-50 p-4 sm:p-8"
          style={{
            backgroundImage: "url('/landingOverviewImage.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 20,
          }}
        >
          <div className="w-[75%]">
            <Title>Workshop and Classes</Title>
            <BodyText>
              Discover tailored classes and workshop just for you
            </BodyText>
          </div>
        </div>
        <div className="sm:flex items-center justify-between my-10">
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
              //   onLeftClick={handleLeftClick}
              //   onRightClick={handleRightClick}
              />
            )}
          </div>
        </div>
        <div className="bg-orange-50 w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8">
          {Events.map((event) => (
            <Link key={event.id} href={`${Pages.event}/${event.id}`}>
              <EventCard className="!bg-white" {...event} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Page;
