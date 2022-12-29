import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import Dashboard from "../component/Dashboard";
import Library from "./Library";
import Trending from "./Trending";
import Player from "./Player";
import Feed from "./Feed";
import Favrouite from "./Favrouite";
import { setClientsToken } from "../spotify";
import "./home.css";
export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientsToken(_token);
    } else {
      setToken(token);
      setClientsToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <div className="sidebar">
          <Dashboard />
        </div>

        <div className="display">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favrouite" element={<Favrouite />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
