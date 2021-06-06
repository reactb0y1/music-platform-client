import React from 'react';
import {ITrack} from "../../types/tracks";
import MainLayout from "../../layout/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

const TrackPage = () => {
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
    const router = useRouter();

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >К списку</Button>
            <Grid container style={{margin: "20px 0"}}>
                <img src={track.picture} width={200} height={200} />
                <div style={{margin: "20px 0"}}>
                    <h1>Название трека - {track.name}</h1>
                    <h3>Исполнитель - {track.artist}</h3>
                    <h3>Прослушиваний - {track.listens}</h3>
                </div>
            </Grid>
            <h3>Слова в треке</h3>
            <p>{track.text}</p>
            <h3>Комментарии</h3>
            <Grid container>
                <TextField label={"Ваше имя"} fullWidth/>
                <TextField label={"Комментарий"} fullWidth multiline rows={4}/>
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
