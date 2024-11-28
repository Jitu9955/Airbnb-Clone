import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Mainlayout = () => {
  return (
    <div>
      <Stack spacing={2}>
        {/* Header */}
        <Header />
        <Box sx={{ OverflowY: "scroll", height: "Calc(100vh-150px)" }}>
          {/*  */}
          <Outlet />
        </Box>
      </Stack>
    </div>
  );
};

export default Mainlayout;
