import React from "react";
import { OutlinedInputProps, TextField } from "@mui/material";
import { AuthInputProps } from "@/types";

const styles = {
  width: "100%",
  "& .MuiInputBase-root": {
    width: "100%",
    height: "48px",
    fontFamily: "var(--font-SF-Rrounded)",
  },
  "& .MuiOutlinedInput-root": {
    height: "48px",
    borderRadius: "12px",
    p: "12.5px 0",
    bgcolor: "#F7FBFF",
    "&.Mui-focused": {
      borderColor: "transparent",
    },
  },
};

export const AuthInput: React.FC<AuthInputProps> = ({
  type,
  name,
  placeholder,
  register,
}) => {
  return (
    <>
      <TextField
        type={type}
        placeholder={placeholder}
        sx={styles}
        slotProps={{
          input: {
            ...register,
            name: name,
            disableUnderline: false,
          } as Partial<OutlinedInputProps>,
        }}
      />
    </>
  );
};
