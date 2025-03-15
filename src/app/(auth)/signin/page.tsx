'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/Button';
import { Checkbox } from '@ui/Checkbox';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Motion from 'src/layout/motion';
import {
  SignInSchema,
  SignInSchemaType,
} from 'src/lib/validation/auth/signin.schema';
import Pages from 'src/routes/page.routes';

function Page() {
  // const { loginUserMutation } = useAuthMutations();
  // const router = useRouter();

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      Email: '',
      Password: '',
    },
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
    watch,
  } = methods;

  const email = watch('Email');
  const password = watch('Password');
  const isFormEmpty = !email || !password;

  const onSubmit: SubmitHandler<SignInSchemaType> = async (values) => {
    try {
      const { Email, Password } = values;
      console.log(Email, Password);
      // await loginUserMutation.mutateAsync({ Phone: `0${Phone}`, Pin });
      // toast.success('Logged in successfully');
      // router.push();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Motion>
      <Wrapper>
        <div className="space-y-8">
          <div className="py-4">
            <Title>Welcome</Title>
            <BodyText>Start your journey with us here.</BodyText>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 max-w-md"
            >
              <Input
                label="Email Address"
                {...register('Email')}
                error={errors.Email?.message}
              />
              <PasswordInput
                label="Password"
                {...register('Password')}
                error={errors.Password?.message}
              />
              <div className="flex items-center justify-between">
                <Checkbox label="Remember me" />
                <Link href={Pages.forgotPassword}>
                  <BodyText className="!text-orange-700">
                    Forgot Password
                  </BodyText>
                </Link>
              </div>
              <Button
                type="submit"
                className="!w-full !my-8"
                isLoading={isSubmitting}
                disabled={isSubmitting || isFormEmpty}
              >
                Sign in
              </Button>
              {/* <div className="flex items-center gap-4">
              <hr className="bg-gray-300 flex-grow" />
              <BodyText className="text-gray-400">or sign in with</BodyText>
              <hr className="bg-gray-300 flex-grow" />
            </div> */}
              {/* <div className="flex justify-center gap-6">
              <div className="border-2 border-gray-300 rounded-md px-10 py-4">
                <FacebookIcon />
              </div>
              <div className="border-2 border-gray-300 rounded-md px-10 py-4">
                <GoogleIcon />
              </div>
            </div> */}
              <div className="flex gap-4 pt-4">
                <BodyText className="text-gray-400">
                  Don’t have an account?
                </BodyText>
                <Link href={Pages.onBoarding}>
                  <BodyText className="!font-semibold text-orange-700">
                    Sign Up
                  </BodyText>
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
