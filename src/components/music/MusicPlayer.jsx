import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import './music.css';
import musicFile from './background-music-438663.mp3';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        console.log("Music file path:", musicFile);
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio playback failed:", error);
                    alert("Audio playback failed: " + error.message);
                });
            }
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={musicFile} loop />
            <button onClick={togglePlay} className="music-btn" title={isPlaying ? "Pause Music" : "Play Music"}>
                {isPlaying ? <FaPause /> : <FaMusic />}
            </button>
        </div>
    );
};

export default MusicPlayer;
