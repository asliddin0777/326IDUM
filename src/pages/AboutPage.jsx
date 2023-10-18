import React, { useEffect } from 'react'
import '../styles/aboutPage.css'
import BackSection from '../components/local/BackSection'
import school from '../assets/icons/school.svg'
import local from '../assets/icons/local.svg'
import { ABOUT_CARD } from '../constants'
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='aboutPage'>
            <div data-aos="fade-up" className='backgSection'>
                <BackSection />
            </div>
            <div data-aos="fade-up" className='conatinerAbout'>
                <h1 className='aboutTitle'>About & School</h1>
                <div className='cards'>
                    <div className='left'>
                        <div className='aboutCard'>
                            <img className='iconSchool' src={school} alt='' />
                            <div className='schoolName'>
                                <h5>School Name</h5>
                                <p>326-IDUM</p>
                            </div>
                            <div className='principaleName'>
                                <h5>Name of the Principale</h5>
                                <p>Yoldashbekova Iroda</p>
                            </div>
                        </div>
                        <div className='localCard'>
                            <img className='iconSchool' src={local} alt='' />
                            <div className='schoolName'>
                                <h5>Address</h5>
                                <p>Almazor district Karakamish 2/1 IDUM No. 326</p>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='rightCards'>
                            {ABOUT_CARD.map((e) => {
                                return <div key={e} className='rightCard'>
                                    <img className='iconSchool' src={school} alt='' />
                                    <div className='schoolName'>
                                        <h4>{e.ques}</h4>
                                        <p>{e.number}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
