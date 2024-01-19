import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  description: z.string().min(10),
});

export type Product = z.infer<typeof ProductSchema>;
