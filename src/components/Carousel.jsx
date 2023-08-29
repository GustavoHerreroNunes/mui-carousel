import React from "react";
import { Grid } from "@mui/material";

import CarouselSlider from "./CarouselSlider";
import CarouselImageList from "./CarouselImagesList";
import CarouselControls from "./CarouselControls";


const Carousel = ({ 
    images, 
    hasText, 
    hasImageList,
    hasSlideOptions,
    carouselColors,
    ariaOptions
}) => {

    return(
        <Grid 
            rowSpacing={2} 
            role="region" 
            aria-roledescription="carousel" 
            aria-label={ariaOptions.carouselTitle}
        >
            <Grid item xs={12}>
                <CarouselControls 
                    ariaOptions={ariaOptions.controlsOptions} 
                    controlColors={carouselColors.control}
                />
            </Grid>
            <Grid item xs={12}>
                <CarouselSlider />
            </Grid>
            <Grid item xs={12}>
                <CarouselImageList images={images} />
            </Grid>
        </Grid>
    );
}

export default Carousel;
