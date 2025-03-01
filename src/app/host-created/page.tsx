'use client';

import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import React from 'react';
import { GreatEmoji } from 'src/assets/images';
import Motion from 'src/layout/motion';

function page() {
  return (
    <Motion>
      <Wrapper className="flex justify-center items-center min-h-screen">
        <div className="max-w-xl flex flex-col items-center justify-center gap-4">
          <Image src={GreatEmoji} height={183} width={183} alt="emoji" />
          <HeaderText
            className="text-center !max-w-md"
            header="Account created successfully!"
            subtext="Welcome aboard! Browse and discover lifestyle events happening around you."
          />
          <Button className="!w-full mt-10">Continue</Button>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
