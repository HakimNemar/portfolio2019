import React from 'react';
import Modal from 'react-bootstrap/Modal';
import QuizHome from '../../assets/img/quiz/home.png';
import QuizQuiz from '../../assets/img/quiz/quiz.png';
import QuizCreate from '../../assets/img/quiz/create.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function Quiz() {

    return (
        <>
            <Modal.Header closeButton>Free_Ads</Modal.Header>
            <Modal.Body>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3} >
                    <Slider style={{ height: "90%" }}>
                        <Slide index={0}><img style={{ width: "475px" }} src={QuizHome} alt="Quiz home" /></Slide>
                        <Slide index={1}><img style={{ width: "475px" }} src={QuizQuiz} alt="Quiz question" /></Slide>
                        <Slide index={2}><img style={{ width: "475px" }} src={QuizCreate} alt="Quiz create quiz" /></Slide>
                    </Slider>
                    <ButtonBack className="btn btn-primary">Back</ButtonBack>
                    <ButtonNext className="btn btn-primary float-right">Next</ButtonNext>
                </CarouselProvider>
            </Modal.Body>
        </>
    )
}

export default Quiz;