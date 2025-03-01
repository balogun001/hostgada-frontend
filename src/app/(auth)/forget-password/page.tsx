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
        <div className="space-y-8">
          <div className="py-4">
            <Title>Forgot Password</Title>
            <BodyText>Enter your email to reset your password</BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <Input label="Email" />

            <Link href={Pages.resetCreated}>
              <Button className="!w-full !my-8">Submit</Button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
