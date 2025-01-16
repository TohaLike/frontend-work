import { Container as MuiContainer } from "@mui/material";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MuiContainer sx={{ maxWidth: "1200px", p: "10px"}} maxWidth={false}>
        {children}
      </MuiContainer>
    </>
  );
};
