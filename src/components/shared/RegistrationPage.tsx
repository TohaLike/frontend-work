"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { ActionButton, AuthInput, Container } from "../ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { registrationSchema } from "@/validations/registration";
import AuthService from "@/services/AuthService";
import Link from "next/link";

import RefreshIcon from "@mui/icons-material/Refresh";

export const RegistrationPage: React.FC = () => {
  const [isSvg, setIsSvg] = useState<string | undefined | any>(null);
  const [loadingCaptcha, setLoadingCaptha] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      captcha: "",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = await AuthService.registration(data);
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.data) window.location.replace("/success/registration");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCaptcha = async () => {
    try {
      const response = await AuthService.captcha();
      setIsSvg(`data:image/svg+xml;base64,${btoa(response?.data)}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoadingCaptha(true);
    getCaptcha();
    setLoadingCaptha(false);
  }, [loadingCaptcha]);

  return (
    <>
      <div>
        <Container>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "100vh",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    maxWidth: "430px",
                    width: "100%",
                    p: "30px",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    variant="h2"
                    fontFamily={"var(--font-SF-Rrounded)"}
                    whiteSpace={"pre-wrap"}
                    fontWeight={"600"}
                    fontSize={"36px"}
                    textAlign={"start"}
                  >
                    Регистрация
                  </Typography>
                  <Box mt={"30px"}>
                    <AuthInput
                      type="text"
                      name="name"
                      titleField="Имя"
                      placeholder="Имя"
                      register={register("name")}
                      error={!!errors.name}
                      errorText={errors?.name?.message}
                    />
                  </Box>
                  <Box mt={"16px"}>
                    <AuthInput
                      type="text"
                      name="email"
                      titleField="Электронная почта"
                      placeholder="email@email.ru"
                      register={register("email")}
                      error={!!errors.email}
                      errorText={errors?.email?.message}
                    />
                  </Box>
                  <Box mt={"16px"}>
                    <AuthInput
                      type="text"
                      name="password"
                      titleField="Пароль"
                      placeholder="Password123*"
                      register={register("password")}
                      error={!!errors.password}
                      errorText={errors?.password?.message}
                    />
                  </Box>
                  <Box
                    sx={{
                      mt: "15px",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "12px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontSize={"16px"}
                      fontWeight={"400"}
                      textAlign={"start"}
                      color="var(--primary-text)"
                      p="0 3px 8px"
                    >
                      Введите код с картинки
                    </Typography>
                    {!loadingCaptcha ? (
                      <img
                        src={isSvg || null}
                        alt="captcha"
                        width={200}
                        height={100}
                        style={{ maxHeight: "80px", width: "100%" }}
                        draggable={false}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "200px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
                    <Box
                      width={"100%"}
                      display={"grid"}
                      gridTemplateColumns={"1fr 30px"}
                      alignItems={"center"}
                    >
                      <AuthInput
                        type="text"
                        name="captcha"
                        placeholder="resolve"
                        register={register("captcha")}
                        error={!!errors.captcha}
                        errorText={errors?.captcha?.message}
                      />
                      <Button
                        type="button"
                        disableFocusRipple
                        disableRipple
                        disableElevation
                        disableTouchRipple
                        sx={{
                          p: 0,
                          maxWidth: "30px",
                          maxHeight: "30px",
                          minWidth: "30px",
                          minHeight: "30px",
                          ":hover": {
                            bgcolor: "transparent",
                          },
                        }}
                        onClick={getCaptcha}
                      >
                        <RefreshIcon />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    textAlign={"start"}
                    m={"10px 8px 0"}
                  >
                    <Typography variant="body2">
                      Вы уже зарегистрированы?{" "}
                      <Typography
                        variant="body2"
                        component={Link}
                        href={"/auth/login"}
                      >
                        Войти
                      </Typography>
                    </Typography>
                  </Box>
                  <ActionButton
                    type="submit"
                    variant="contained"
                    borderRadius={"12px"}
                    width={"100%"}
                    height={"52px"}
                    fontSize={"20px"}
                    mt={"24px"}
                    textTransform={"none"}
                    bgcolor={"#162D3A"}
                  >
                    Зарегистрироваться
                  </ActionButton>
                </Paper>
              </Box>
            </form>
          </FormProvider>
        </Container>
      </div>
    </>
  );
};
