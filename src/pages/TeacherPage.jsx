import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Person1 from "../assets/images/unsplash_pH8bJytQMZc.png";
import Person2 from "../assets/images/unsplash_Y7C7F26fzZM.png";
import Person3 from "../assets/images/unsplash_--VGE4S8ZWg.png";
import Person4 from "../assets/images/unsplash_cBtrsNMxB14.png";
import Person5 from "../assets/images/unsplash_d1UPkiFd04A.png";
import Person6 from "../assets/images/unsplash_mEZ3PoFGs_k.png";
import Person7 from "../assets/images/unsplash_OhKElOkQ3RE.png";
import '../styles/teacherPage.css'
import AOS from "aos";
import "aos/dist/aos.css";

export const TeacherPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div data-aos="fade-up" className="myCarousel">
                <div className="container">
                    <Carousel
                        showArrows={false}
                        showThumbs={false}
                        centerSlidePercentage={28}
                        width={"100%"}
                        centerMode
                        autoPlay={true}
                        interval={1500}
                        infiniteLoop
                    >
                        <div className="slider">
                            <div className="allMain">
                                <div className="first">
                                    <div className="box">
                                        <img src={Person1} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person4} alt="" />
                                        <p>
                                            <b>Name:</b>     :     MAMAN, S.Pd., M.M.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196402161989031005{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Physics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person7} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider">
                            <div className="allMain">
                                <div className="first">
                                    <div className="box">
                                        <img src={Person2} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person2} alt="" />
                                        <p>
                                            <b>Name:</b>     :     MAMAN, S.Pd., M.M.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196402161989031005{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Physics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person3} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider">
                            <div className="allMain">
                                <div className="first">
                                    <div className="box">
                                        <img src={Person2} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person5} alt="" />
                                        <p>
                                            <b>Name:</b>     :     MAMAN, S.Pd., M.M.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196402161989031005{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Physics{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="first">
                                    <div className="box">
                                        <img src={Person6} alt="" />
                                        <p>
                                            <b>Name:</b>     :     Hj. ELIS HERNTI, S.Pd.{" "}
                                        </p>
                                        <p>
                                            <b>ZIP:</b>     :       196606051992032008{" "}
                                        </p>
                                        <p>
                                            <b>Field:</b>     :      Mathematics{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
