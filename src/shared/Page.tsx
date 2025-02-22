import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "90vh",
        position: "relative",
        mt: 8,
      }}
    >
      {children}
    </Box>
  );
};

export default Page;
