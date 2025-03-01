'use client';

import SearchIcon from '@asset/icons/SearchIcon';
import Card from '@components/Card';
import { Input } from '@ui/Input';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import React, { useState } from 'react';
import Layout from 'src/layout';
import Motion from 'src/layout/motion';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { TextArea } from '@ui/Textarea';
import { Button } from '@ui/Button';

// Sample data array
const cardData = [
  { title: 'Booking an event', content: 'Details about booking an event...' },
  { title: 'Cancelling an event', content: 'Steps to cancel an event...' },
  { title: 'Refund policy', content: 'Learn more about refund policies...' },
  {
    title: 'Changing event details',
    content: 'How to edit your event info...',
  },
  { title: 'Payment issues', content: 'Resolve issues with your payment...' },
  { title: 'Contact support', content: 'Reach out for help and support...' },
];

// CardItem Component
function CardItem({
  title,
  content,
  isActive,
  onClick,
}: {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Card
      className={classNames('h-20 flex flex-col justify-center', {
        'h-fit': isActive,
      })}
    >
      <div className="flex justify-between items-center">
        <BodyText className="text-p3">{title}</BodyText>
        <div
          onClick={onClick}
          className={`h-10 w-10 flex justify-center items-center rounded-lg cursor-pointer ${
            isActive ? 'bg-orange-500' : 'bg-gray-300'
          }`}
        >
          {isActive ? (
            <div className="bg-white py-[1px] px-2 " />
          ) : (
            <p className="text-2xl text-gray-500">+</p>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="mt-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <BodyText className="text-sm">{content}</BodyText>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

function Page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Layout>
      <Motion>
        <Wrapper>
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <Title>How can we help?</Title>
            <Input
              className="w-[50%]"
              label="What can we help you with today"
              rounded
              rightIcon={<SearchIcon className="text-gray-400" />}
            />
          </div>
          <div className="bg-orange-50 w-full h-fit flex items-center justify-center rounded-lg px-10 py-20 my-8 space-y-4">
            <div
              className="w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{ gridAutoRows: 'min-content' }}
            >
              {cardData.map((item, index) => (
                <CardItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onClick={() =>
                    setActiveIndex((prevIndex) =>
                      prevIndex === index ? null : index
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="">
            <Title dashboard>Submit a ticket.</Title>
            <div className="space-y-4 py-6">
              <Input className="lg:w-1/4" label="Email Address" />
              <TextArea className="lg:w-2/4" label="Submit a ticket." />
              <Button size="lg">Submit ticket</Button>
            </div>
          </div>
        </Wrapper>
      </Motion>
    </Layout>
  );
}

export default Page;
