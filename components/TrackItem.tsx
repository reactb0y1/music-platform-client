import React from 'react';
import {ITrack} from "../types/tracks";
import {Card, Grid, IconButton} from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss';
import {Pause, PlayArrow, Delete} from "@material-ui/icons";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction={"column"} className={styles.track__text}>
                <div>{track.name}</div>
                <div className={styles.track__artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton className={styles.track__icoDelete}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
