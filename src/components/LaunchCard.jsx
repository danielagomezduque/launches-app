import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const LaunchCard = ({ launch }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "2rem",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "5.25%",
            width: "50%",
          }}
          image={launch.links.mission_patch_small}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" fontWeight="700">
            {launch.mission_name}
          </Typography>
          <Typography
            align="center"
            sx={{ color: "#008080", fontWeight: "700" }}
          >
            {launch.launch_year}
          </Typography>
          <Typography align="center">
            {launch.launch_success ? "Fue exitoso" : "No fue exitoso"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={`/launch/${launch.flight_number}`}
            style={{ textDecoration: 'none' }}
            >Details</Link>
          </Button>
          <IconButton aria-label="" size="small">
            <FontAwesomeIcon icon={faInfo} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
