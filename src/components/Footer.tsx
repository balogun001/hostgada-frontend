import { BodyText } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-700 text-white px-4 mt-20">
      <Wrapper className="flex flex-col md:flex-row h-full w-full items-center py-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <BodyText>© Hostgada 2024 - All Rights Reserved</BodyText>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-2 items-center justify-center md:justify-end">
          <BodyText>Abouts</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>How it works</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>FAQ</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>Contact</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>Cookies</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>Terms</BodyText>
          <div className="w-1 h-1 bg-white rounded-full" />
          <BodyText>Privacy</BodyText>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
