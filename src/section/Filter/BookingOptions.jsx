import { InputLabel, Stack, Switch, Typography } from "@mui/material";
import React from "react";

const BookingOptions = () => {
  return (
    <div>
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Booking Options
        </InputLabel>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="caption" sx={{ fontSize: 13 }}>
            Instant Book
          </Typography>
          <Switch defaultChecked />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="caption" sx={{ fontSize: 13 }}>
            Self Check-in
          </Typography>
          <Switch />
        </Stack>
      </Stack>
    </div>
  );
};

export default BookingOptions;
