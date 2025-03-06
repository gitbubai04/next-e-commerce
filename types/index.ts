import { z } from "zod";
import { insertProductSchema } from "@/lib/validator";

export type Products = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt?: Date;
};
