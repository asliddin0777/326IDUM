import React from 'react'
import '../../styles/backSection.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CORUSEL_CARD } from '../../constants';

const BackSection = () => {
    return (
        <div className='backSection'>
            <div className='backContainer'>
                <h1 className='slidesTitle'>Profile SMP Negeri  1 Cibadak</h1>
                <div className='corusel'>
                    <Carousel showArrows={true} showThumbs={false} centerSlidePercentage={28} width={'100%'} centerMode autoPlay={true} interval={1500} infiniteLoop>
                        {CORUSEL_CARD.map((e) => {
                            return (
                                <div key={e} className='backCard'>
                                    <img src={e.images} alt=''/>
                                    <p className='title'>{e.title}</p>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default BackSection