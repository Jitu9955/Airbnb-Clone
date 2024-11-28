import {
  Box,
  Checkbox,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Animities = () => {
  return (
    <div>
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Animities
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
                  <Typography variant="caption" fontSize={13}>
                    Wifi
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
                  <Typography variant="caption" fontSize={13}>
                    Kitchen
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
                  <Typography variant="caption" fontSize={13}>
                    Washer
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
                  <Typography variant="caption" fontSize={13}>
                    Dryer
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
                  <Typography variant="caption" fontSize={13}>
                    Parking
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
                  <Typography variant="caption" fontSize={13}>
                    Swimming pool
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
                  <Typography variant="caption" fontSize={13}>
                    Gym
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
                  <Typography variant="caption" fontSize={13}>
                    PlayGround
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

export default Animities;
