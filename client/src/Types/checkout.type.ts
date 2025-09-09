import z, { discriminatedUnion } from "zod";
import { fr } from "zod/locales";

z.config(fr());
const baseShema = {
  nom: z.string().nonempty(),
  email: z.email().nonempty(),
  phone: z.string().nonempty(),
  address: z.string().nonempty(),
  zip: z.string().nonempty(),
  city: z.string().nonempty(),
  country: z.string().nonempty(),
};
export const CheckoutSchema = discriminatedUnion("modePaiment", [
  z.object({
    ...baseShema,
    modePaiment: z.literal("cash"),
  }),
  z.object({
    ...baseShema,
    modePaiment: z.literal("e-Money"),
    eMoneyNumber: z.string().nonempty(),
    eMoneyPin: z.string().nonempty(),
  }),
]);

export type CheckoutType = z.infer<typeof CheckoutSchema>;
