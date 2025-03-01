'use client';

import { Button } from '@ui/Button';
import { ImageInput } from '@ui/ImageInput';
import { Input } from '@ui/Input';
import { Select } from '@ui/Select';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import { useState } from 'react';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Page() {
  const [images, setImages] = useState<(string | File)[]>([]);

  const handleImageChange = (selectedImages: (string | File)[]) => {
    // Custom logic on image selection
    setImages(selectedImages);
  };

  return (
    <Motion>
      <Wrapper>
        <div className="space-y-8">
          <div className="py-4">
            <Title>Personal Info</Title>
            <BodyText>Kindly fill the form carefully</BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <Input label="Name" />
            <Input label="Address" />
            <Input label="Phone Number" />
            <Select
              label="Country"
              placeholder="Choose a Country"
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
              ]}
            />
            <ImageInput
              onChange={handleImageChange}
              value={images}
              placeholder="Drag and drop files or click to browse"
              label="Profile Picture (optional)"
            />

            <Link href={Pages.hostDetails}>
              <Button className="!w-full !my-8">Create my account</Button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
