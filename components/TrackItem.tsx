import React from 'react';
import {ITrack} from "../types/tracks";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss';
import {Pause, PlayArrow, Delete} from "@material-ui/icons";
import {useRouter} from "next/router";
import {useAction} from "../hooks/useAction";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();
    const {playTrack, pauseTrack, setActiveTrack} = useAction();

    const play = (e) => {
        e.stopPropagation();
        setActiveTrack(track);
        playTrack()
    };

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction={"column"} className={styles.track__text}>
                <div>{track.name}</div>
                <div className={styles.track__artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} className={styles.track__icoDelete}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
