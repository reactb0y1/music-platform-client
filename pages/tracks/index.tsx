import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTrack} from "../../store/actions-creators/track";

const Tracks = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.tracks);

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

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

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTrack())
});
