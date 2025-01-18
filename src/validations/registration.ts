import { z } from "zod";

export const registrationSchema = z
  .object({
    name: z.string().min(1, { message: "Введите имя" }),
    email: z
      .string()
      .email({ message: "Некорректная почта" })
      .max(254, { message: "" }),
    password: z.string().min(8, {
      message:
        "Пароль должен содержать не менее 8 символов, включать хотя бы одну заглавную букву, одну цифру и один специальный символ",
    }),
    captcha: z.string().min(8, { message: "Введите код с картинки" }).max(8),
  })
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsSpecialChar = (ch: string) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0;
    let countOfNumbers = 0;
    let countOfSpecialChar = 0;

    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }

    if (countOfUpperCase < 1 || countOfSpecialChar < 1 || countOfNumbers < 1) {
      checkPassComplexity.addIssue({
        code: "custom",
        message: "password does not meet complexity requirements",
      });
    }
  });
