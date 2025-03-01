'use client';

import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { ImageInput } from '@ui/ImageInput';
import { Input } from '@ui/Input';
import { Select } from '@ui/Select';
import { BodyText, Title } from '@ui/Text';
import { TextArea } from '@ui/Textarea';
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
            <Title>Host Details</Title>
            <BodyText>This is what your profile will display as</BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <Input label="Host Name" />
            <TextArea label="Bio" />
            <div className="flex item-center">
              <Select
                className="w-4/5"
                placeholder="Choose a Country"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                ]}
                defaultInputValue="Linkedin"
              />
              <div className="w-[170%]">
                <Input label="Url" />
              </div>
            </div>
            <ImageInput
              onChange={handleImageChange}
              value={images}
              placeholder="Drag and drop files or click to browse"
              label="Identity Verification"
            />

            <Checkbox
              label={
                <>
                  I agree to the{' '}
                  <span className="text-orange-700">
                    Terms & Conditions and Privacy Policy
                  </span>
                </>
              }
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
