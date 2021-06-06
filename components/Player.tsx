import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss'
import stylesTrack from '../styles/TrackItem.module.scss'
import {ITrack} from "../types/tracks";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const active = false;
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

    return (
        <div className={styles.palyer}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid container direction={"column"} className={stylesTrack.track__text}>
                <div>{track.name}</div>
                <div className={stylesTrack.track__artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    );
};

export default Player;
