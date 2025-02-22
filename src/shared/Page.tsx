import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "90vh",
        position: "relative",
      }}
    >
      {children}
      {/* <Box
        component="footer"
        sx={{
          textAlign: "center",
          mt: "auto",
          py: 2,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2025 criswaves. All rights reserved.
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Page;
