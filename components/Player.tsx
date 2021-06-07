import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss'
import stylesTrack from '../styles/TrackItem.module.scss'
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

let audio;

const Player = () => {
    const {pause, volume, active, currentTime, duration} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setCurrentTime, setDuration} = useAction();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play_();
        }
    }, [active]);

    const setAudio = () => {
        if (active) {
            audio.src = active?.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            };
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            };
        }
    };

    const play_ = () => {
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

    if (!active) {
        return null
    }

    return (
        <div className={styles.palyer}>
            <IconButton onClick={play_}>
                {pause ? <PlayArrow/> : <Pause/>}
            </IconButton>
            <Grid container direction={"column"} className={stylesTrack.track__text}>
                <div>{active?.name}</div>
                <div className={stylesTrack.track__artist}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume} />
        </div>
    );
};

export default Player;
