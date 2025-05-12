import { CreateUserDto, SignInDto } from "@/types/api";
import { z } from "zod";

export const loginSchema: z.ZodType<SignInDto> = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema: z.ZodType<
  CreateUserDto & { confirmPassword: string }
> = z
  .object({
    firstName: z.string().min(2, "First name must be longer than 1 character"),
    lastName: z.string().min(2, "Last name must be longer than 1 character"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const profileSchema: z.ZodType<Partial<CreateUserDto> & { id: number }> =
  z.object({
    id: z.number({ message: "ID is required" }),
    firstName: z.string().min(2, "First name must be longer than 1 character"),
    lastName: z.string().min(2, "Last name must be longer than 1 character"),
    email: z.string().email("Invalid email address"),
  });

export type ProfileSchema = z.infer<typeof profileSchema>;
