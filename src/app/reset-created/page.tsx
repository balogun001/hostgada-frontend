'use client';

import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { SentMailImage } from 'src/assets/images';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function page() {
  return (
    <Motion>
      <Wrapper className="flex justify-center items-center min-h-screen">
        <div className="max-w-xl flex flex-col items-center justify-center gap-4">
          <Image src={SentMailImage} height={183} width={183} alt="emoji" />
          <HeaderText
            className="text-center !max-w-md"
            header="Reset Email Sent"
            subtext="A password reset link has been sent to your email kindly check your email."
          />
          <Link className="w-full" href={Pages.resetPassword}>
            <Button className="!w-full mt-10">Continue</Button>
          </Link>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default page;
