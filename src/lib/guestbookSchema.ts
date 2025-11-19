import { z } from "zod";

export const guestbookSchema = z.object({
  message: z
    .string()
    .min(3, "Message must be at least 3 characters.")
    .max(1000, "Message must be under 1000 characters."),
});
