import {
  Box,
  InputLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const RoomsAndBeds = () => {
  const [bedroom, setBedroom] = useState("any");
  const handleChangeBedroom = (event, newBedroom) => {
    setBedroom(newBedroom);
  };
  return (
    <div>
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Rooms And Beds
        </InputLabel>
        <Box sx={{ p: 1 }}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ fontSize: 13 }}>
              Bedrooms
            </Typography>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              value={bedroom}
              onChange={handleChangeBedroom}
            >
              <ToggleButton value={"any"}>Any</ToggleButton>
              <ToggleButton value={"1"}>1</ToggleButton>
              <ToggleButton value={"2"}>2</ToggleButton>
              <ToggleButton value={"3"}>3</ToggleButton>
              <ToggleButton value={"4"}>4</ToggleButton>
              <ToggleButton value={"5"}>5</ToggleButton>
              <ToggleButton value={"6"}>6</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Box>
        <Box sx={{ p: 1 }}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ fontSize: 13 }}>
              Baths
            </Typography>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              value={bedroom}
              onChange={handleChangeBedroom}
            >
              <ToggleButton value={"any"}>Any</ToggleButton>
              <ToggleButton value={"1"}>1</ToggleButton>
              <ToggleButton value={"2"}>2</ToggleButton>
              <ToggleButton value={"3"}>3</ToggleButton>
              <ToggleButton value={"4"}>4</ToggleButton>
              <ToggleButton value={"5"}>5</ToggleButton>
              <ToggleButton value={"6"}>6</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Box>
        <Box sx={{ p: 1 }}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ fontSize: 13 }}>
              Beds
            </Typography>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              value={bedroom}
              onChange={handleChangeBedroom}
            >
              <ToggleButton value={"any"}>Any</ToggleButton>
              <ToggleButton value={"1"}>1</ToggleButton>
              <ToggleButton value={"2"}>2</ToggleButton>
              <ToggleButton value={"3"}>3</ToggleButton>
              <ToggleButton value={"4"}>4</ToggleButton>
              <ToggleButton value={"5"}>5</ToggleButton>
              <ToggleButton value={"6"}>6</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default RoomsAndBeds;
