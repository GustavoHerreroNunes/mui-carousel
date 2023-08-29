import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';

const PreviousButton = ({ color }) => (
    <Button>
        <ArrowBackIosNewIcon color={color} />
    </Button>
);

const NextButton = ({ color }) => (
    <Button>
        <ArrowForwardIosIcon color={color} />
    </Button>
);

const ShowSlideButton = ({ color }) => (
    <Button>
        <CircleIcon color={color} />
    </Button>
);

const CarouselControls = ({
    hasSlideOptions,
    numberOfSlides,
    ariaOptions,
    controlColors
}) => (
    <div role="group" aria-label="Slide Controls">
        
    </div>
);

export default CarouselControls;
