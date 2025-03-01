'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Motion>
      <Wrapper>
        <div className="space-y-6">
          <div className="py-4">
            <Title>Email Verification</Title>
            <BodyText>
              we have sent a code to your email
              <br /> xyz@gmail.com
            </BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <Input label="Code" />
            <div className="flex gap-4">
              <BodyText className="text-gray-400">
                Didn’t receive code?
              </BodyText>
              <BodyText className="!font-semibold text-orange-700">
                Resend
              </BodyText>
            </div>
            <Link href={Pages.hostInfo}>
              <Button className="!w-full !my-8">Verify account</Button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
