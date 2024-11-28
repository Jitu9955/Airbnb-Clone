import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import TypeOfPlace from "./TypeOfPlace";
import PriceRange from "./PriceRange";
import RoomsAndBeds from "./RoomsAndBeds";
import PropertyType from "./PropertyType";
import Animities from "./Animities";
import BookingOptions from "./BookingOptions";

const Filter = () => {
  return (
    <div>
      <Box
        sx={{
          py: 4,
          pl: 1,
        }}
      >
        <Card sx={{ width: 1, pb: 3 }}>
          <Box
            sx={{
              mb: 2,
              py: 2,
              px: 3,
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[900],
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1">Filters</Typography>
              <Button size="small">Clear all Filters</Button>
            </Stack>
          </Box>
          <Stack spacing={2} sx={{ px: 3 }}>
            {/* type of place */}
            <TypeOfPlace />
            <Divider />
            {/* price range filter */}
            <PriceRange />
            <Divider />
            {/* number of bed,bathrooms,room */}
            <RoomsAndBeds />
            <Divider />
            {/* Property Type */}
            <PropertyType />
            <Divider />
            {/* Animities */}
            <Animities />
            <Divider />
            {/* booking options */}
            <BookingOptions />
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default Filter;
