import { Routes, Route, useParams } from "react-router-dom";

import { LaunchDetail } from "./components/LaunchDetail";
import { LaunchList } from "./components/LaunchList";


export const App = () => {

  return (
    <>
      <img
        src="https://1000marcas.net/wp-content/uploads/2020/11/SpaceX-Logo.png"
        alt="logo spacex"
        width="50%"
        className="img_logo"
      />
      <Routes>
        <Route path="/" element={<LaunchList />}/>
        <Route path="launch/:launchId" element={<LaunchDetail />}/>
      </Routes>

    </>
  );
};
