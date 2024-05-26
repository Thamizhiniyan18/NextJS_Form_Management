"use server";

import { z } from "zod";
import { schema } from "./registrationSchema";

export const onDataAction = async (data: z.infer<typeof schema>) => {
  const parsed = await schema.safeParseAsync(data);

  if (parsed.success) {
    console.log("User registered");
    return { message: "User registered", user: parsed.data };
  } else {
    return {
      message: "Invalid data",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
};

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export const onFormAction = async (
  prevState: FormState,
  formdata: FormData
): Promise<FormState> => {
  const data = Object.fromEntries(formdata);
  const parsed = await schema.safeParseAsync(data);

  if (parsed.success) {
    return { message: "User registered" };
  } else {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(data)) {
      fields[key] = data[key].toString();
    }

    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
};

export async function validateZipCode(zipCode: string): Promise<boolean> {
  console.log("validateZipcode on SERVER", zipCode);
  return /^\d{5}/.test(zipCode) && zipCode.startsWith("9");
}
