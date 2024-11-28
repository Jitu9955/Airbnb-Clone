import {
  FormControlLabel,
  InputLabel,
  Radio,
  Stack,
  Typography,
  RadioGroup,
} from "@mui/material";
import React from "react";

const TypeOfPlace = () => {
  return (
    <div>
      <Stack spacing={1}>
        <InputLabel
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Type Of Place
        </InputLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="female"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="any-type"
            control={<Radio />}
            label={
              <Typography
                variant="subtitle2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Any type
              </Typography>
            }
          />
          <FormControlLabel
            value="room"
            control={<Radio />}
            label={
              <Typography
                variant="subtitle2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Room
              </Typography>
            }
          />
          <FormControlLabel
            value="entire-home"
            control={<Radio />}
            label={
              <Typography
                variant="subtitle2"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                Entire home
              </Typography>
            }
          />
        </RadioGroup>
      </Stack>
    </div>
  );
};

export default TypeOfPlace;
