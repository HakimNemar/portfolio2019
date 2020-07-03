import React from 'react';
import Modal from 'react-bootstrap/Modal';
import FreeAdsHome from '../../assets/img/freeads/home.png';
import FreeAdsUpdate from '../../assets/img/freeads/update.png';
import FreeAdsAnnonce from '../../assets/img/freeads/annonce.png';
import FreeAdsRegister from '../../assets/img/freeads/register.png';
import FreeAdsDashboard from '../../assets/img/freeads/dashboard.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function FreeAds() {

    return (
        <>
            <Modal.Header closeButton>Free_Ads</Modal.Header>
            <Modal.Body>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={5} >
                    <Slider style={{ height: "90%" }}>
                        <Slide index={0}><img style={{ width: "475px" }} src={FreeAdsHome} alt="FreeAds home" /></Slide>
                        <Slide index={1}><img style={{ width: "475px" }} src={FreeAdsRegister} alt="FreeAds register" /></Slide>
                        <Slide index={2}><img style={{ width: "475px" }} src={FreeAdsDashboard} alt="FreeAds dashboard" /></Slide>
                        <Slide index={3}><img style={{ width: "475px" }} src={FreeAdsUpdate} alt="FreeAds update" /></Slide>
                        <Slide index={4}><img style={{ width: "475px" }} src={FreeAdsAnnonce} alt="FreeAds annonce" /></Slide>
                    </Slider>
                    <ButtonBack className="btn btn-primary">Back</ButtonBack>
                    <ButtonNext className="btn btn-primary float-right">Next</ButtonNext>
                </CarouselProvider>
            </Modal.Body>
        </>
    )
}

export default FreeAds;