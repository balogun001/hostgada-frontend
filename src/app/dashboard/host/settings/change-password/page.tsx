'use client';

import { CongratulationsIcon, PhotoIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { PasswordInput } from '@ui/PasswordInput';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Wrapper dashboard>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col items-center text-center gap-8 p-4">
            <div className="bg-gray-300 rounded-full overflow-hidden">
              <CongratulationsIcon className="text-9xl" />
            </div>
            <div className="space-y-2">
              <BodyText className="text-p3">Successful!</BodyText>
              <BodyText className="text-gray-400">
                You have successfully changed your
                <br /> password
              </BodyText>
            </div>
            <Link className="w-full" href={Pages.hostDashboardSettings}>
              <Button size="lg" className="!w-full">
                Done
              </Button>
            </Link>
          </div>
        </Modal>
        <Title dashboard>Profile Settings</Title>
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
            <PasswordInput className="w-full mr-4" label="New Password" />
            <PasswordInput
              className="w-full mr-4"
              label="Confirm New Password"
            />
            <Button onClick={openModal} size="lg">
              Continue
            </Button>
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
