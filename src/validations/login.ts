import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Некорректная почта" })
    .max(254, { message: "" }),
  password: z.string().min(8, {
    message:
      "Пароль должен содержать не менее 8 символов",
  }),
  captcha: z.string().min(0, { message: "Введите код с картинки" })
});
