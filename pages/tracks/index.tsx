import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";

const Tracks = () => {
    const router = useRouter();

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
                    </Card>
                </Grid>
            </div>
        </MainLayout>
    );
};

export default Tracks;
