import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import Logo from "../../components/Logo";
import Input from "./input";
import { faker } from "@faker-js/faker";

const Header = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Box sx={{ boxShadow: "0px 2px 4x rgba(0 , 0, 0 ,0.1)" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ px: 3, py: 2 }}
          >
            {/* Logo */}
            <Logo />
            {/* input */}
            <Input />
            {/* user avatar */}
            <Avatar alt={faker.person.fullname} src={faker.image.avatar()} />
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default Header;
