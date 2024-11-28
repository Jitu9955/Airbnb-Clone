import { Card, CardContent, styled, Zoom } from "@mui/material";
import React from "react";
import { useState } from "react";
import MapControlFullscreen from "../../components//map/MapControlFullscreen";
import MapControlGeolocate from "../../components/map/MapControlGeolocate";
import MapControlNavigation from "../../components/map/MapControlNavigation";
import MapControlPopup from "../../components/map/MapControlPopup";
import MapControlScale from "../../components/map/MapControlScale";

const MapWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: "hidden",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "& .mapbox-ctrl-logo, .mapbox-ctrl-bottom-right": {
    display: "none",
  },
}));
const Map = ({ data, ...other }) => {
  const [tooltip, setTootip] = useState(null);
  const [viewport, setViewport] = useState({
    Zoom: 2,
  });

  return;
  <div>
    <Card>
      <CardContent>
        <MapWrapperStyle>
          <MapGL {...viewport} onViewportChange={setViewport} {...other}>
            <MapControlFullscreen />
            <MapControlGeolocate />
            <MapControlNavigation />
            <MapControlPopup />
            <MapControlScale />
            {data.map((country) => (
              <MapControlMarker
                key={country.name}
                latitude={country.latlan[0]}
                longitude={country.latlag[1]}
                onClick={() => setTootip(country)}
              />
            ))}
          </MapGL>
        </MapWrapperStyle>
      </CardContent>
    </Card>
    ;
  </div>;
};

export default Map;
