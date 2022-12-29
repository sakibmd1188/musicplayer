import React, { useEffect, useState } from "react";
import "./dashboard.css";
// import dp from "../image/dp.png";
import { Link } from "react-router-dom";
import apiClient from "../spotify";
import {
  DashboardCustomizeTwoTone,
  Favorite,
  LibraryAdd,
  Logout,
  PlayCircleRounded,
  Whatshot,
} from "@mui/icons-material";

const Dashboard = () => {
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
      setUserName(response.data.display_name);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="flex_col">
        <img src={image} alt="dp" className="dp_image" />
        <span>{userName}</span>
      </div>

      <div className="icons">
        <div className="flex_col">
          <Link to="/" className="link">
            <DashboardCustomizeTwoTone />
          </Link>
          <span>Feed</span>
        </div>
        <div className="flex_col">
          <Link to="/trending" className="link">
            <Whatshot />
          </Link>
          <span>Trending</span>
        </div>
        <div className="flex_col">
          <Link to="/player" className="link">
            <PlayCircleRounded />
          </Link>
          <span>Player</span>
        </div>

        <div className="flex_col">
          <Link to="/favrouite" className="link">
            <Favorite />
          </Link>
          <span>Favorite</span>
        </div>
        <div className="flex_col">
          <Link to="/library" className="link">
            <LibraryAdd />
          </Link>

          <span>Library</span>
        </div>
      </div>
      <div className="flex_col">
        <Logout />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default Dashboard;
