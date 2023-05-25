import React from "react";
import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import {AiOutlinePlayCircle} from 'react-icons/ai'
import AudioVisualizer from "./AudioVisualizer";

const songs = [
  {
    title: "Hit The Road Jack",
    source: "/audios/Hit_The_Road_Jack - Ray Charles.mp3",
  },
  {
    title: "Stand By Me",
    source: "/audios/Stand_By_Me - Ben King.mp3",
  },
  {
    title: "Lost On You",
    source: "/audios/Lost_On_You - LP.mp3",
  },
  {
    title: "The Sky Is Crying",
    source: "/audios/The_Sky_Is_Crying - Gary Coleman.mp3",
  },
  {
    title: "Pretty Woman",
    source: "/audios/Pretty_Woman - Roy Orbison.mp3",
  },
];

const AudioPlayer = () => {
  const [songIndex, setSongIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    //Se creata una funcion que se le selecciona de manera aleatoria la primera cancion a reproducir
    const randomSong = Math.floor(Math.random() * songs.length);
    setSongIndex(randomSong);
  }, []);

  // Se crea una funcion que se selecciona la siguiente cancion despues de que finalice la que esta sonando.
  const handleEnded = () => {
    const randomSong = Math.floor(Math.random() * songs.length);
    setSongIndex(randomSong);
  };

  const  handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div className="custom-controls">
        <button onClick={handlePlayPause}>
          <AiOutlinePlayCircle />
          {isPlaying}
        </button>
        <ReactAudioPlayer
          src={songs[songIndex].source}
          autoPlay={false}
          controls={false}
          playing={isPlaying}
          onEnded={handleEnded}
        />
        <AudioVisualizer />
        <style jsx>{`
          .custom-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
          }
          
          .custom-controls button {
            background-color: #ff5500;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
          }
          
          .custom-controls button:hover {
            background-color: #ff4400;
          }
        `}</style>
      </div>
    </>
  );
};

export default AudioPlayer;
