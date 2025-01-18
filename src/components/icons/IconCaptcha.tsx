"use client";
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
interface Props {
  [key: string | number]: any;
}
export const IconCaptcha: React.FC<Props> = ({ color, isSvg, ...props }) => {
  return (
    <SvgIcon sx={{ ...props }}>
      {isSvg}
    </SvgIcon>
  );
};
