import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { alpha, useTheme } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

const images = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  "https://i.pinimg.com/736x/13/f0/f8/13f0f85e0c953cae7795da6f6f318f84.jpg",
  "https://i.pinimg.com/736x/00/ca/0c/00ca0c2062d03f795897cb252238279a.jpg",
  "https://i.pinimg.com/736x/1e/d2/47/1ed247a8141625dcc8028b6194baf2aa.jpg",
  "https://i.pinimg.com/736x/34/ba/27/34ba27702fcfe2a5e62e20044c383810.jpg",
  "https://i.pinimg.com/736x/03/b8/53/03b85378e154516e433dd1a5b2f41285.jpg",
  "https://i.pinimg.com/736x/36/bb/25/36bb25e5db3a5924d5f7642cd35e98d4.jpg",
  "https://i.pinimg.com/736x/b1/b5/9b/b1b59b871cc93384eecfa4d69abcdc34.jpg",
  "https://i.pinimg.com/736x/49/72/c8/4972c81ceb10a076fd7728b63584555a.jpg",
  "https://images.unsplash.com/photo-1600607683513-bad013a01f20",
  "https://i.pinimg.com/736x/86/dd/85/86dd85f606d59b007b87854bb31fa19a.jpg",
];
const Properties = ({ view }) => {
  const Theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {/* ListRender */}
        {[...Array(9)].map((elm, index) => (
          <Grid xs={12} md={view === "map" ? 12 : 6} item key={index}>
            <Card>
              <Box position={"relative"}>
                <CardMedia
                  sx={{ height: 320 }}
                  tittle=" villa"
                  image={images[index]}
                />
                <Chip
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: Theme.palette.common.white,
                    bgcolor: alpha(Theme.palette.common.black, 0.4),
                  }}
                  icon={
                    <StarIcon
                      style={{
                        color: Theme.palette.warning.dark,
                      }}
                      weight="fill"
                    />
                  }
                  label={4.5}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <FavoriteBorderIcon
                    style={{
                      color: Theme.palette.error.main,
                    }}
                  />
                </IconButton>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: "text.secondary",
                      }}
                    >
                      Place to stay
                    </Typography>
                    <Stack
                      direction={"row"}
                      spacing={0.5}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          fontSize: 18,
                          color: "text.secondary",
                          textDecoration: "line-through",
                        }}
                      >
                        $80
                      </Typography>
                      <Stack direction={"row"} alignItems={"center"}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: 18,
                            color: "text.secondary",
                          }}
                        >
                          $67
                        </Typography>
                        <Typography variant="caption">/Night</Typography>
                      </Stack>
                      <Divider orientation="vertical" sx={{ height: 20 }} />
                      <Typography variant="subtitle1">$111 Total</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <PlaceOutlinedIcon weight="bold" />
                    <Typography variant="subtitle2">Taronto,Canada</Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <HotelOutlinedIcon
                        size={20}
                        weight="bold"
                        style={{
                          color: Theme.palette.grey[600],
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.secondary" }}
                      >
                        6 Beds
                      </Typography>
                    </Stack>

                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Divider orientation="vertical" sx={{ height: 15 }} />
                      <BathtubOutlinedIcon
                        size={20}
                        weight="bold"
                        style={{
                          color: Theme.palette.grey[600],
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.secondary" }}
                      >
                        1 Bath
                      </Typography>
                      <Divider orientation="vertical" sx={{ height: 15 }} />
                    </Stack>

                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <HotelOutlinedIcon
                        size={20}
                        weight="bold"
                        style={{
                          color: Theme.palette.grey[600],
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "text.secondary" }}
                      >
                        3 Bedrooms
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Properties;
