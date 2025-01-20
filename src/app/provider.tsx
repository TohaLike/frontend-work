"use client";
import { API_URL } from "@/http";
import { AuthResponse } from "@/types";
import React, { PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const checkAuth = async () => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
    } catch (e: any) {
      console.log(e?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
};
