import React, { useState, useEffect } from "react";
import APIKit from "../spotify";

import "./library.css";
import { useNavigate } from "react-router-dom";
import { PlayCircle } from "@mui/icons-material";

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    // console.log(id);
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((list) => (
          <div
            className="playlist-card"
            key={list.id}
            onClick={() => playPlaylist(list.id)}
          >
            <img
              src={list?.images[0]?.url}
              className="playlist_image"
              alt="Playlist-Art"
            />

            <p className="playlist-title">{list.name}</p>
            <p className="playlist_subtitle">{list.tracks.total} Songs</p>
            <div className="playlist-fade">
              <PlayCircle className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
