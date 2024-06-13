import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email required" })
    .refine((text) => patterns.email.test(text), {
      message: "email is invalid",
    }),
  states: z.array(z.string()).max(2).min(1),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: "",
  email: "",
  states: [],
};
