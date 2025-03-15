'use client';

import {
  BinIcon,
  ChevronLeftIcon,
  InstagramIcon,
  PhotoIcon,
} from '@asset/icons';
import { landingPage } from '@asset/images';
import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import { Select } from '@ui/Select';
import { BodyText, Title } from '@ui/Text';
import { TextArea } from '@ui/Textarea';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <Motion>
      <Wrapper>
        <Title dashboard>Profile Settings</Title>
        <div className="flex items-center gap-4">
          <ChevronLeftIcon />
          <BodyText>Back to listing</BodyText>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 pt-4">
          <div className="w-52 h-36 bg-gray-100 rounded-md p-4 flex items-center justify-center relative">
            <div className="relative cursor-pointer" onClick={handleImageClick}>
              <Image
                className="w-24 h-24 rounded-full object-cover"
                src={landingPage || selectedImage}
                alt="profile image"
                width={96}
                height={96}
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                <PhotoIcon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="w-[280px] xl:w-[450px] text-gray-500 space-y-6">
            <Input value="Sandra Catherer" disabled />
            <Input value="Nigeria" disabled />
            <Input value="+23481869481" disabled />
            <Input value="Email Address" disabled />

            <div className="flex w-full gap-2">
              <TextArea value="bio" className="w-full mr-4" disabled />
              <BodyText className="text-orange-500 cursor-pointer mr-[-100px]">
                Edit
              </BodyText>
            </div>

            <div className="flex w-full items-center gap-2">
              <PasswordInput className="w-full mr-4" disabled />
              <Link
                className="mr-[-100px]"
                href={Pages.hostDashboardSettingsPassword}
              >
                <BodyText className="text-orange-500">Change</BodyText>
              </Link>
            </div>

            <div className="flex w-full gap-2">
              <Select className="w-20 xl:w-36" />
              <Input
                className="w-[200%]"
                rightIcon={<Button>Add</Button>}
                value="Url"
              />
            </div>
            <div className="h-10 w-full bg-gray-300 flex justify-between items-center p-2 rounded-md">
              <div className="flex gap-2 items-center">
                <InstagramIcon />
                <BodyText>htttp:dayo/bigmanmoney</BodyText>
              </div>
              <BinIcon />
            </div>
          </div>
        </div>
        <div className="text-gray-500 space-y-4">
          <Title dashboard>Newsletter</Title>
          <Checkbox
            className="!items-start"
            label={
              <div className="mt-[-4px]">
                <BodyText className="text-p3">
                  Send me email notifications
                </BodyText>
                <BodyText>
                  Sign me up to hostgada, featuring exclusive offers, latest
                  product info,
                  <br /> news about upcoming events and more.
                </BodyText>
              </div>
            }
          />
          <Checkbox
            label={
              <div className="mt-[-4px]">
                I agree to receive personalized email marketing messages <br />{' '}
                from Hostgada.
              </div>
            }
          />
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
