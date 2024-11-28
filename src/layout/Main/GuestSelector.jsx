import {
  Divider,
  IconButton,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { MinusCircle, PlusCircle, Stack } from "phosphor-react";
import React, { Children, useState } from "react";

const GuestSelector = () => {
  const [anchorEl, setAnchorE1] = useState(null);
  const [Guests, setGuests] = useState({
    adults: 2,
    Children: 1,
    infants: 1,
    pets: 1,
  });
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorE1(null);
  };

  const handleGuestsChange = (type, value) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(0, prevGuests[type] + value),
    }));
  };
  const displayGuests =
    "${Guests.adults} Adults, ${Guests.children} children, ${Guests.infants} infants, ${Guests.pets} pets";
  return (
    <>
      <TextField
        onClick={handleClick}
        fullWidth
        value={displayGuests}
        placeholder="Enter guest details"
        variant="standard"
        InputProps={{
          disableUnderline: true,
          readOnly: true,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Stack spacing={2} sx={{ px: 4, py: 2 }}>
          <Stack spacing={2}>
            <Stack
              sx={{ width: 300 }}
              direction={"row"}
              justifycontent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  adults
                </Typography>
                <Typography variant="caption">ages 13 or above</Typography>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={Guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={Guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", +1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction={"row"}
              justifycontent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  Children
                </Typography>
                <Typography variant="caption">ages 2-12</Typography>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={Guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={Guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", +1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction={"row"}
              justifycontent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  infants
                </Typography>
                <Typography variant="caption">Under 2</Typography>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={Guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={Guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", +1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{ width: 300 }}
              direction={"row"}
              justifycontent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
                  pets
                </Typography>
                <Typography variant="caption">ages 2-12</Typography>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", -1)}
                  disabled={Guests.adults === 0}
                >
                  <MinusCircle />
                </IconButton>
                <TextField
                  disabled
                  value={Guests.adults}
                  type="number"
                  style={{ width: "40px", textAlign: "center" }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleGuestsChange("adults", +1)}
                >
                  <PlusCircle />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {displayGuests}
          </Typography>
        </Stack>
      </Popover>
    </>
  );
};

export default GuestSelector;
