import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid} from "@material-ui/core";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const back = () => setActiveStep(prev => prev - 1);
    const next = () => setActiveStep(prev => prev + 1);

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <h1>STEP 1</h1>
                }
                {activeStep === 1 &&
                    <h1>STEP 2</h1>
                }
                {activeStep === 2 &&
                    <h1>STEP 3</h1>
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
