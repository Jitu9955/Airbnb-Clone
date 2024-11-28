import { InputLabel, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const PriceRange = () => {
  const [value, setValue] = useState([20, 75]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          Price Range
        </InputLabel>

        <Slider
          valueLabelDisplay="auto"
          value={value}
          onChange={handleChange}
        />
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <TextField
            size="small"
            label="Minimum"
            type="number"
            value={value[0]}
            onChange={(e) => {
              setValue((prev) => {
                return [e.target.value, prev[1]];
              });
            }}
          ></TextField>
          <TextField
            size="small"
            label="Maximum"
            type="number"
            value={value[1]}
            onChange={(e) => {
              setValue((prev) => {
                return [prev[0], e.target.value];
              });
            }}
          ></TextField>
        </Stack>
      </Stack>
    </div>
  );
};

export default PriceRange;
