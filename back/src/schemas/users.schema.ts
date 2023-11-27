import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  full_name: z.string().max(150),
  email: z.string().email(),
  password: z.string(),
  phone: z.number().positive(),
  createdAt: z.string(),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const usersSchemaResponse = z.array(userSchemaResponse);

const userSchemaUpdate = userSchemaResponse.partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};
