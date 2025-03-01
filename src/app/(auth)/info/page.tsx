'use client';

import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { Input } from '@ui/Input';
import { Select } from '@ui/Select';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function page() {
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

            <Link href={Pages.guestCreated}>
              <Button className="!w-full !my-8">Create my account</Button>
            </Link>

            <div className="flex gap-4">
              <BodyText className="text-gray-400">Having an account?</BodyText>
              <BodyText className="!font-semibold text-orange-700">
                Sign In
              </BodyText>
            </div>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
