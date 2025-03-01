'use client';

import { Button } from '@ui/Button';
import { PasswordInput } from '@ui/PasswordInput';
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
            <Title>Reset Password</Title>
            <BodyText>Enter your new password</BodyText>
          </div>
          <form className="space-y-6 max-w-md">
            <PasswordInput label="New Password" />
            <PasswordInput label="Confirm Password" />

            <Link href={Pages.hostInfo}>
              <Button className="!w-full !my-8">Reset Password</Button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
