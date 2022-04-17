import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLaunchByFlightNumer } from "../services/launches";

export const LaunchDetail = () => {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    getLaunchByFlightNumer(params.launchId)
    .then(setLaunch);
  }, []);
  const params = useParams();
  return <div>{launch.mission_name}</div>;
};
