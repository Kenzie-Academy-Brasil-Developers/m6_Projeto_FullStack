import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Formeça um e-mail válido."),
  password: z.string().min(1, "Senha incorreta."),
});
