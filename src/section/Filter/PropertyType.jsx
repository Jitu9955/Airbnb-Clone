import {
  Box,
  Checkbox,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import HouseIcon from "@mui/icons-material/House";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WbShadeIcon from "@mui/icons-material/WbShade";
import ApartmentIcon from "@mui/icons-material/Apartment";

const PropertyType = () => {
  return (
    <div>
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Property Type
        </InputLabel>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <HouseIcon size={2} weight="bold" />
                  <Typography variant="caption" fontSize={13}>
                    House
                  </Typography>
                </Stack>
                <Checkbox size="small" />
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <TipsAndUpdatesIcon size={2} weight="bold" />
                  <Typography variant="caption" fontSize={13}>
                    Hotel
                  </Typography>
                </Stack>
                <Checkbox size="small" />
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <WbShadeIcon size={2} weight="bold" />
                  <Typography variant="caption" fontSize={13}>
                    Guest House
                  </Typography>
                </Stack>
                <Checkbox size="small" />
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <ApartmentIcon size={2} weight="bold" />
                  <Typography variant="caption" fontSize={13}>
                    Apartment
                  </Typography>
                </Stack>
                <Checkbox size="small" />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};

export default PropertyType;
