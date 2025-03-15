import { z } from 'zod';

export const SignInSchema = z.object({
  Email: z.string().min(1, 'Email is required').email('Invalid email address'),
  Password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
