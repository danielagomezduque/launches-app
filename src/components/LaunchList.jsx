import React, { useEffect, useState } from "react";
import { LaunchCard } from './LaunchCard'
import { getDataLauches } from "../services/launches";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const LaunchList = () => {

  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    getDataLauches().then(setLaunches);
  }, []);

  return (
    <Container maxWidth="lg">
    <Grid container spacing={3} columns={12}>
      {launches.map((launch) => (
        <LaunchCard launch={launch} key={launch.flight_number}/>
      ))}
    </Grid>
  </Container>
  )
}
