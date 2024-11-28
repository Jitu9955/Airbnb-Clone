import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import ParkSharpIcon from "@mui/icons-material/ParkSharp";
import CastleIcon from "@mui/icons-material/Castle";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import BedIcon from "@mui/icons-material/Bed";
import PoolIcon from "@mui/icons-material/Pool";
import Properties from "./Properties";
CardView.propTypes = {
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
  view: PropTypes.string,
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value == index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.PropTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CardView(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.value}
          onChange={props.handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="National Parks" icon={<ParkSharpIcon size={20} />} />
          <Tab label="Castle" icon={<CastleIcon size={20} />} />
          <Tab label="Beach" icon={<UmbrellaIcon size={20} />} />
          <Tab label="Topical" icon={<ParkSharpIcon size={20} />} />
          <Tab label="Rooms" icon={<BedIcon size={20} />} />
          <Tab label="Amazing Pool" icon={<PoolIcon size={20} />} />
        </Tabs>
      </Box>
      <CustomTabPanel value={props.value} index={0}>
        <Properties view={props.view} />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={1}>
        {/* <Properties /> */}
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={2}>
        <Properties />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={3}>
        {/* <Properties /> */}
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={4}>
        <Properties />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={5}>
        <Properties />
      </CustomTabPanel>
    </Box>
  );
}
