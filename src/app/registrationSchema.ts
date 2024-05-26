import { z } from "zod";
import { validateZipCode } from "./actions";

export const schema = z.object({
  first: z.string().trim().min(1, {
    message: "First name is required",
  }),
  last: z.string().trim().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  zipcode: z.string().trim().refine(validateZipCode, {
    message: "Invalid ZipCode",
  }),
});
