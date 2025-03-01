import { VerifiedIcon } from '@asset/icons';
import { Button } from '@ui/Button';
import { BodyText } from '@ui/Text';
import React from 'react';
import StarIcon from 'src/assets/icons/StarIcon';

function HostCard() {
  return (
    <div
      className="w-full h-[357px] bg-cover bg-center m-0 p-4 flex flex-col justify-between"
      style={{
        backgroundImage: "url('/landingPage.webp')",
        borderRadius: 20,
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <VerifiedIcon />
          <BodyText className="!text-white">Verified Host</BodyText>
        </div>
        <div className="flex justify-between">
          <div className="">
            <BodyText className="!text-white !font-semibold">
              Cathrine Sandra
            </BodyText>
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

          <Button size="sm" kinds="secondary">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HostCard;
