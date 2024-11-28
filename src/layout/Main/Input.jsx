import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import dayjs from "dayjs";
import {
  DateRangePicker,
  MobileDateRangePicker,
  SingleInputDateRangeField,
} from "@mui/x-date-pickers-pro";
import { MagnifyingGlass } from "phosphor-react";
import LocationSearch from "./LocationSearch";
import GuestSelector from "./GuestSelector";

const styledIconButton = styled(IconButton)(({ theme }) => {
  return {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  };
});

const shortcutItems = [
  {
    label: " This week",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "Last week",
    getValue: () => {
      const today = dayjs();
      const startOfLastWeek = today.subtract(1, "week").startOf("week");
      const endOfLastWeek = today.subtract(1, "week").endOf("week");
      return [startOfLastWeek, endOfLastWeek];
    },
  },
  {
    label: "Last 7 days",
    getValue: () => {
      const today = dayjs();
      const startOfLast7Days = today.subtract(7, "day").startOf("day");
      const endOfToday = today.endOf("day");
      return [startOfLast7Days, endOfToday];
    },
  },
  {
    label: "Current month",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "Next month",
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.add(1, "month").startOf("month");
      const endOfNextMonth = today.add(1, "month").endOf("month");
      return [startOfNextMonth, endOfNextMonth];
    },
  },

  {
    label: "Reset",
    getValue: () => [null, null],
  },
];
const Input = () => {
  const isMobile = useResponsive("down", "md");

  const [value, setValue] = useState();
  return (
    <div>
      <Box
        sx={{
          px: { xs: 2, md: 0 },
        }}
      >
        <Card sx={{ borderRadius: isMobile ? 2 : 10, py: 2, px: 4 }}>
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems={"center"}
            spacing={2}
          >
            <Box>
              <Grid
                container
                sx={{ width: isMobile ? "80VW" : 720 }}
                spacing={2}
              >
                <Grid item md={4} xs={12}>
                  <Stack spacing={{ xs: 1, md: 0 }}>
                    <Typography variant="subtitle2">Destiny</Typography>
                    {/* Location Search */}
                    <LocationSearch />
                  </Stack>
                </Grid>
                <Grid item md={5} xs={12}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={0.2}
                  >
                    {!isMobile && (
                      <Divider orientation="vertical" sx={{ height: 40 }} />
                    )}

                    <Stack spacing={{ xs: 1, md: 0 }}>
                      <Typography variant="subtitle2">Check in-out</Typography>
                      {isMobile ? (
                        <MobileDateRangePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(startProps, endProps) => (
                            <>
                              <TextField {...startProps} label="" />
                              <TextField {...endProps} label="" />
                            </>
                          )}
                        />
                      ) : (
                        <DateRangePicker
                          slots={{
                            field: SingleInputDateRangeField,
                            textField: TextField,
                          }}
                          slotProps={{
                            shortcuts: {
                              items: shortcutItems,
                            },
                            textField: {
                              fullWidth: true,
                              variant: "standard",
                              InputProps: {
                                disableUnderline: true,
                              },
                            },
                          }}
                          sx={{ width: 220 }}
                          disablePast
                          name="allowedRange"
                        />
                      )}
                    </Stack>
                    {!isMobile && (
                      <Divider orientation="vertical" sx={{ height: 40 }} />
                    )}
                  </Stack>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Stack spacing={{ xs: 1, md: 0 }}>
                    <Typography variant="subtitle2">Guests</Typography>
                    {/* Guests */}
                    <GuestSelector />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            {isMobile ? (
              <Button
                fullWidth
                variant="contained"
                startIcon={<MagnifyingGlass />}
              >
                Search
              </Button>
            ) : (
              <styledIconButton>
                <MagnifyingGlass style={{ color: "white" }} />
              </styledIconButton>
            )}
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default Input;
