import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const back = () => setActiveStep(prev => prev - 1);
    const next = () => setActiveStep(prev => prev + 1);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            label={'Название трека'}
                            style={{marginTop: 10}}
                        />
                        <TextField
                            label={'Имя исполнителя'}
                            style={{marginTop: 10}}
                        />
                        <TextField
                            label={'Слова к треку'}
                            style={{marginTop: 10}}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept={'image/*'}>
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept={'audio/*'}>
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button onClick={back} disabled={activeStep === 0}>Назад</Button>
                <Button onClick={next} disabled={activeStep === 2}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
