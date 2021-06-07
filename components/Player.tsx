import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss'
import stylesTrack from '../styles/TrackItem.module.scss'
import {ITrack} from "../types/tracks";
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

let audio;

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some text 1',
        listens: 5,
        audio: 'http://localhost:5000/audio/2397959c-f292-4e3e-a10f-8f14a8fdd971.mp3',
        picture: 'http://localhost:5000/image/2353e5b7-1498-4d76-aefd-6f08f02b2379.jpg',
        comments: []
    };

    const {pause, volume, active, currentTime, duration} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setCurrentTime, setDuration} = useAction();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
        }
    }, []);

    const setAudio = () => {
        if (active) {
            audio.src = track.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            };
        }
    };

    const play = () => {
        if (pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    };

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    };

    return (
        <div className={styles.palyer}>
            <IconButton onClick={play}>
                {pause ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <Grid container direction={"column"} className={stylesTrack.track__text}>
                <div>{track.name}</div>
                <div className={stylesTrack.track__artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
};

export default Player;
