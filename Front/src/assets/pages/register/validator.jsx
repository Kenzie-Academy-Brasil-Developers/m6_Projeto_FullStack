import { z } from "zod";

export const registerSchema = z
  .object({
    full_name: z.string().min(4, "Nome Inválido!"),
    email: z.string().email("Forneça um e-mail válido."),
    password: z.string().min(4, "Senha incorreta."),
    confirm: z.string().min(4, "Senha incorreta"),
    phone: z.string().min(4, "Número Inválido!"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });
