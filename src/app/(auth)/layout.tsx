'use client';

import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  OnboardingOne,
  OnboardingThree,
  OnboardingTwo,
} from 'src/assets/images';
import { AuthResponsive } from 'src/components/BreakPoints';
import { useWindowSize } from 'src/hooks/useWindowSize';
import Motion from 'src/layout/motion';

function Layout({ children }: { children: ReactNode }) {
  const { width } = useWindowSize();
  const largeScreen = 1085;

  return (
    <Motion>
      <div className="flex p-4">
        {width > largeScreen ? (
          <div className="w-1/2 min-h-full">
            <Wrapper>
              <Carousel
                responsive={AuthResponsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots
                containerClass="carousel"
                removeArrowOnDeviceType={[
                  'tablet',
                  'mobile',
                  'desktop',
                  'smallDestop',
                  'superLargeDesktop',
                ]}
              >
                <Image
                  src={OnboardingOne}
                  alt="images"
                  className="w-[100%] h-[800px] 2xl:h-[1000px] object-cover rounded-3xl"
                />
                <Image
                  src={OnboardingTwo}
                  alt="images"
                  className="w-[100%] h-[800px] 2xl:h-[1000px] object-cover rounded-3xl"
                />
                <Image
                  src={OnboardingThree}
                  alt="images"
                  className="w-[100%] h-[800px] 2xl:h-[1000px] object-cover rounded-3xl"
                />
              </Carousel>
            </Wrapper>
          </div>
        ) : null}

        <main className="flex-1 flex justify-center items-center bg-white min-h-full">
          <div className="w-full max-w-2xl">{children}</div>
        </main>
      </div>
    </Motion>
  );
}

export default Layout;
