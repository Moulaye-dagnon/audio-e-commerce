import z from "zod";

export const shemaForm = z.object({
  email: z.string(),
  password: z.string().min(8),
});
export const schemaRegister = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(8),
  ConfirmPassword: z.string().min(8),
});
export type FormFilds = z.infer<typeof shemaForm>;
export type RegisterType = z.infer<typeof schemaRegister>;
