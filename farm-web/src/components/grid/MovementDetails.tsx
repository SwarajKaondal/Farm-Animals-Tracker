import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import FarmCard from "./FarmCard";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Movement } from "../../reducers/EntityTypes";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const MovementDetails = (props: { data: Movement }) => {
  const { data } = props;
  console.log(data);
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 700,
              height: 250,
            },
          }}
        >
          <Item elevation={2}>
            <Typography variant="h6" gutterBottom>
              Origin Farm
            </Typography>
            <FarmCard farmData={data.originFarm} />
          </Item>
        </Box>
      </Grid>
      <Grid item xs={2} style={{ textAlign: "center", alignSelf: "center" }}>
        <EastIcon style={{ fontSize: "30px" }} />
      </Grid>
      <Grid item xs={5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 700,
              height: 250,
            },
          }}
        >
          <Item elevation={2}>
            <Typography variant="h6" gutterBottom>
              Destination Farm
            </Typography>
            <FarmCard farmData={data.destFarm} />
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MovementDetails;
