"use client";
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { ActionButton, AuthInput, Container } from "../ui";
import Link from "next/link";

export const RegistrationPage: React.FC = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
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
            >
              Регистрация
            </Typography>
            <Box mt={"30px"}>
              <Typography
                variant="body1"
                fontSize={"16px"}
                fontWeight={"400"}
                color="var(--primary-text)"
                p="0 3px 8px"
              >
                Электронная почта
              </Typography>
              <AuthInput
                type="email"
                name="email"
                placeholder="Email@mail.ru"
              />
            </Box>
            <Box mt={"16px"}>
              <Typography
                variant="body1"
                fontSize={"16px"}
                fontWeight={"400"}
                color="var(--primary-text)"
                p="0 3px 8px"
              >
                Пароль
              </Typography>
              <AuthInput
                type="password"
                name="password"
                placeholder="Password123@/"
              />
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"5px"} m={"10px 8px 0"}>
              <Typography variant="body2">Вы уже зарегистрированы?</Typography>
              <Typography variant="body2" component={Link} href={"/auth/login"}>
                Войти
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
      </Container>
    </>
  );
};
