import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Введите имя" }),
  email: z
    .string()
    .email({ message: "Некорректная почта" })
    .max(254, { message: "" }),
  password: z
    .string()
    .min(6, { message: "Минимальная длина пароля 6 символов" })
    .max(150, { message: "Слишком длинный пароль" }),
});
