import * as React from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../reducers/rootReducer";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import { Tooltip, TooltipProps, Typography, styled, tooltipClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { GeojsonProps } from "react-native-maps";

const accessToken = "pk.eyJ1Ijoic3dhcmFqa2FvbmRhbCIsImEiOiJjbHJ3ZGZsbDYxMHI5MmtwMWVia2NzbzRuIn0.YXpGk3mCVV0DqVvo8-zPbg";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} arrow />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(255, 192, 38, 1)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export const MapComponent = () => {
  const movements = useSelector((state: IRootReducer) => state.movements.data);
  const [lineData, setLineData] = useState<GeoJSON.FeatureCollection>();

  useEffect(() => {
    const lines = movements.map((movement) => {
      return {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [movement.originFarm.longitude, movement.originFarm.latitude],
            [movement.destFarm.longitude, movement.destFarm.latitude],
          ],
        },
      };
    });

    setLineData({
      type: "FeatureCollection",
      //@ts-ignore
      features: lines,
    });
  }, [movements]);

  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 1200, height: 500 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={accessToken}
    >
      {movements.map((movement) => (
        <Marker key={movement.originFarm.id} longitude={movement.originFarm.longitude} latitude={movement.originFarm.latitude}>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography variant="h6" color="inherit">
                  <u>{movement.originFarm.name}</u>
                </Typography>
                {"Address: "}
                <b>
                  {movement.originFarm.address +
                    ", " +
                    movement.originFarm.city +
                    ", " +
                    movement.originFarm.state +
                    ", " +
                    movement.originFarm.postalCode}
                </b>
                <br />
                {"Total Animals: "}
                <b>{movement.originFarm.totalAnimal}</b>
              </React.Fragment>
            }
          >
            <LocationOnTwoToneIcon />
          </HtmlTooltip>
        </Marker>
      ))}
      <Source id="polylineLayer" type="geojson" data={lineData}>
        <Layer
          id="lineLayer"
          type="line"
          source="my-data"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "rgba(0, 0, 0, 0.1)",
            "line-width": 1,
          }}
        />
      </Source>
    </Map>
  );
};
