'use client';

import { ChevronLeftIcon, CongratulationsIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import Card from '@components/Card';
import EventsSteps from '@components/dashboard/EventsSteps';
import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { ImageInput } from '@ui/ImageInput';
import { Input } from '@ui/Input';
import { Modal } from '@ui/Modal';
import { BodyText, Title } from '@ui/Text';
import { TextArea } from '@ui/Textarea';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Switch from 'react-switch';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function StepOne({ onNext }: { onNext: () => void }) {
  const [images, setImages] = useState<(string | File)[]>([]);

  const handleImageChange = (selectedImages: (string | File)[]) => {
    setImages(selectedImages);
  };

  const handleSaveProgress = () => {
    console.log('StepOne data saved');
    onNext();
  };

  return (
    <Card className="2xl:p-10 overflow-x-hidden">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
        <div>
          <Title dashboard>Gathering Details</Title>
          <BodyText>Fill in the details about your gathering</BodyText>
        </div>
        <Button
          kinds="tertiary"
          size="lg"
          className="!bg-transparent !text-gray-600 border !border-gray-600"
        >
          Save Progress
        </Button>
      </div>
      <div className="space-y-6 py-6">
        {/* Inputs and controls */}
        <div className="w-full flex flex-col xl:flex-row gap-4">
          <Input className="flex-1" label="Title" />
          <Input className="flex-1" label="Type" />
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-4">
          <Input className="flex-1" label="Date" />
          <Input className="flex-1" label="Door Opens" />
          <Input className="flex-1" label="Program Starts" />
        </div>
        <div className="w-full text-gray-400 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col xl:flex-row gap-4">
            <BodyText className="pr-1 md:pr-10">
              Approval <br />
              Preference{' '}
            </BodyText>
            <div className="border border-gray-300 rounded-md p-4">
              <Checkbox type="radio" label="Automatic Approvals" />
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <Checkbox type="radio" label="Manual Approval " />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <BodyText className="pr-4">
              Program
              <br />
              Visibility
            </BodyText>
            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="Private" />
            </div>
            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="Public" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between gap-4">
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
          <ImageInput
            onChange={handleImageChange}
            value={images}
            placeholder="Drag and drop your image here"
            customImagehandler={() => console.log('opened custom Images')}
          />
        </div>
      </div>
      <Button onClick={handleSaveProgress} className="mt-10 !px-20">
        Continue
      </Button>
    </Card>
  );
}

function StepTwo({ onNext }: { onNext: () => void }) {
  const [isFree, setIsFree] = useState(false);

  const handleSwitchChange = () => {
    setIsFree((prev) => !prev);
    console.log('Switch toggled:', !isFree);
  };

  const handleContinue = () => {
    console.log('StepTwo completed');
    onNext();
  };

  return (
    <Motion>
      <Card className="xl:p-10">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
          <div>
            <Title dashboard>Ticketing</Title>
            <BodyText>Fill in the details about your events</BodyText>
          </div>
          <Button
            kinds="tertiary"
            size="lg"
            className="!bg-transparent !text-gray-600 border !border-gray-600"
          >
            Save Progress
          </Button>
        </div>
        <div className="flex gap-2 text-gray-400 py-10 ">
          <Switch
            onChange={handleSwitchChange}
            checked={isFree}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor="#E8E8E8"
            onColor="#FE791B"
          />
          <BodyText>Free</BodyText>
        </div>
        {isFree ? (
          <Motion>
            <div className="w-full xl:w-[50%]">
              <Input
                label="Your hosting will be set to free and your event will be accessed freely"
                disabled
              />
            </div>
          </Motion>
        ) : (
          <div className="w-full xl:w-[60%] grid grid-cols-1 xl:grid-cols-2 gap-5">
            <Input label="Total Pass Available" />
            <Input label="Pricing" />
            <Input label="What does this ticket entail" />
            <Input label="Discounts (optional)" />
          </div>
        )}
        <Button className="mt-20 !px-20" onClick={handleContinue}>
          Continue
        </Button>
      </Card>
    </Motion>
  );
}

function StepThree({ onNext }: { onNext: () => void }) {
  const handleContinue = () => {
    console.log('StepThree completed');
    onNext();
  };
  return (
    <Motion>
      <Card className="xl:p-10">
        <div className="flex flex-col xl:flex-row justify-between text-gray-400 items-center gap-2">
          <div>
            <Title dashboard>Special Features</Title>
            <BodyText>Fill in the details about your events</BodyText>
          </div>
          <Button
            kinds="tertiary"
            size="lg"
            className="!bg-transparent !text-gray-600 border !border-gray-600"
          >
            Save Progress
          </Button>
        </div>
        <div className="space-y-6 py-4 text-gray-400">
          <div className="w-full xl:max-w-md">
            <Input label="Dress Theme (optional)" />
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <BodyText>
              Will your guests be required
              <br /> tobringing any food or refreshments?
            </BodyText>

            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="Yes" />
            </div>
            <div className="border border-gray-300 rounded-md py-4 px-4 lg:px-10">
              <Checkbox type="radio" label="No" />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[70%]">
          <TextArea label="Special Feature to entice your guest" />
        </div>

        <Button onClick={handleContinue} className="mt-10 !px-20">
          Continue
        </Button>
      </Card>
    </Motion>
  );
}

function StepFour() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Motion>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col items-center text-center gap-8 p-4">
          <div className="bg-gray-300 rounded-full overflow-hidden">
            <CongratulationsIcon className="text-9xl" />
          </div>
          <div className="space-y-2">
            <BodyText className="text-p3">Congratulations! </BodyText>
            <BodyText className="text-gray-400">
              Your occasion has now been published
              <br /> and it is now available for bookings{' '}
            </BodyText>
          </div>
          <Link className="w-full" href={Pages.hostDashboardEventListing}>
            <Button size="lg" className="!w-full">
              View Listing
            </Button>
          </Link>
        </div>
      </Modal>
      <Card className="xl:p-10">
        <div className="flex flex-col xl:flex-row justify-between text-gray-400 items-center gap-2">
          <div>
            <Title dashboard>Review</Title>
            <BodyText>
              Kindly look through the file and ensure everything
              <br /> is fine before you publish.
            </BodyText>
          </div>
          <Button
            kinds="tertiary"
            size="lg"
            className="!bg-transparent !text-gray-600 border !border-gray-600"
          >
            Edit Event
          </Button>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 py-10">
          <div className="space-y-4 max-w-80">
            <div className="w-full h-48 border border-gray-300 rounded-md p-4">
              <Image src={landingPage} alt="image" className="rounded-md" />
            </div>

            <BodyText className="!font-semibold !text-p3 w-[85%]">
              Full Moon Ceremony ~ Native Flute Meditation and Shamanic
            </BodyText>
            <BodyText>House Party | Nov 24,2024 | 9:00AM GMT+1</BodyText>
          </div>
          <div className="max-w-xl space-y-4 text-gray-600">
            <Title className="!p-0" dashboard>
              Details
            </Title>
            <BodyText>
              <span className="font-bold pr-4">Pass:</span>
              #1,500,000.00
            </BodyText>
            <BodyText>
              <span className="font-bold pr-4">Visibility:</span>
              Public
            </BodyText>
            <BodyText>
              <span className="font-bold pr-4">Approvals:</span>
              Automatic
            </BodyText>
            <BodyText>
              <span className="font-bold">Description:</span> A house party is a
              casual, intimate gathering hosted in someone’s home, designed to
              bring people together for fun, relaxation, and socializing. It
              typically features music, light refreshments, and activities
              tailored to the vibe of the event—whether it’s dancing, games, or
              just great conversations.
            </BodyText>
          </div>
        </div>

        <Button onClick={openModal} className="!px-20">
          Continue
        </Button>
      </Card>
    </Motion>
  );
}

function Forms({ step, onNext }: { step: number; onNext: () => void }) {
  switch (step) {
    case 1:
      return <StepOne onNext={onNext} />;
    case 2:
      return <StepTwo onNext={onNext} />;
    case 3:
      return <StepThree onNext={onNext} />;
    case 4:
      return <StepFour />;
    default:
      return <StepOne onNext={onNext} />;
  }
}

function Events() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Motion>
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2 py-4">
          <ChevronLeftIcon />
          <BodyText>Back</BodyText>
        </div>
        <Title dashboard>Create Events</Title>
        <EventsSteps step={step} />
        {Forms({ step, onNext: handleNextStep })}
      </Wrapper>
    </Motion>
  );
}

export default Events;
