import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/tracks";
import TrackList from "../../components/TrackList";

const Tracks = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text 1', listens: 5, audio: 'http://localhost:5000/audio/2397959c-f292-4e3e-a10f-8f14a8fdd971.mp3', picture: 'http://localhost:5000/image/2353e5b7-1498-4d76-aefd-6f08f02b2379.jpg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Some text 2', listens: 5, audio: 'http://localhost:5000/audio/2397959c-f292-4e3e-a10f-8f14a8fdd971.mp3', picture: 'http://localhost:5000/image/2353e5b7-1498-4d76-aefd-6f08f02b2379.jpg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Some text 3', listens: 5, audio: 'http://localhost:5000/audio/2397959c-f292-4e3e-a10f-8f14a8fdd971.mp3', picture: 'http://localhost:5000/image/2353e5b7-1498-4d76-aefd-6f08f02b2379.jpg', comments: []},
    ];

    return (
        <MainLayout>
            <div>
                <Grid container justifyContent={"center"}>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent={"space-between"}>
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks} />
                    </Card>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Tracks;
