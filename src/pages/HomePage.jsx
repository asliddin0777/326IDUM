import React, { useEffect } from 'react'
import bkcg from "../assets/images/bgImage.png";
import dots from "../assets/icons/Group 44.svg";
import brat from "../assets/images/iroda.jpg";
import LineTh from "../assets/images/Vector 1.png";
import Icon1 from "../assets/images/Group 30.png";
import Icon2 from "../assets/images/Group 31.png";
import Icon3 from "../assets/images/Group 33.png";
import Lupa from "../assets/images/Vector lupa.png";
import Image21 from "../assets/images/image 21.png";
import Arrow from "../assets/images/Group 19.png";
import Arrow2 from "../assets/images/image 23.png";
import Arrow3 from "../assets/images/image 24.png";
import Arrow4 from "../assets/images/image 25.png";
import Icon from "../assets/images/logo.jpg";
import SchoolBoy from "../assets/images/image 20.png";
import Image26 from "../assets/images/image 26.png";
import Image27 from "../assets/images/image 27.png";
import Image28 from "../assets/images/image 28.png";
import Image29 from "../assets/images/image 29.png";
import Image30 from "../assets/images/Rectangle 7.png";
import Image31 from "../assets/images/Rectangle 8.png";
import '../styles/homePage.css'
import AOS from "aos";
import "aos/dist/aos.css";

export const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div data-aos="fade-up" className="hBottom">
                <div className="forBckg">
                    <div className="homeContainer">
                        <div className="hBottomManin">
                            <h1>School</h1>
                            <p>
                                Specialized No. 326 in Almazor district of Tashkent city The
                                official website about the state secondary school!!!
                            </p>
                            <a href="/contact">
                                <button>Click to see</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div data-aos="fade-up" className="about">
                <div className="containerAbout">
                    <div className="aboutmain">
                        <div className="aboutLeft">
                            <img className="abOne" style={{width: 470, height: 360, objectFit: "cover"}}  src={brat} alt="" />
                            <div className="abTwo">
                                <img src={dots} alt="" />
                            </div>
                        </div>
                        <div className="aboutRight">
                            <h1>
                                This person is our school <br /> principal Yuldashbekova Iroda Aripovna
                            </h1>
                            <a href="/aboutHeaTech">
                                <button>About principal</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="profile">
                <div className="containerProfile">
                    <div className="profileMain">
                        <div className="profileLeft">
                            <div className="pLeft1">
                                <h1>School profile</h1>
                                <p>
                                    Beside is our overall school profile from starting from the
                                    front to all the facilities available In our school we will...
                                </p>
                                <a href="#">
                                    <button>More information</button>
                                </a>
                            </div>
                            <div className="pLeft2">
                                <img src={LineTh} alt="" />
                            </div>
                        </div>
                        <div className="profileRight">
                            <div className="boxesTwo">
                                <a href="#">
                                    <div className="box">
                                        <img src={Icon1} alt="" />
                                        <p>Facility</p>
                                        <h6>
                                            The customer is very happy to be adipcing the water
                                            itself.
                                        </h6>
                                    </div>
                                </a>

                                <a href="/contact">
                                    <div className="box">
                                        <img src={Icon2} alt="" />
                                        <p>Location</p>
                                        <h6>
                                            The customer is very happy to be adipcing the water
                                            itself.
                                        </h6>
                                    </div>
                                </a>
                            </div>
                            <div className="boxeOne">
                                <a href="#">
                                    <div className="box">
                                        <img src={Icon3} alt="" />
                                        <p>Performance</p>
                                        <h6>
                                            If you click on it, you will learn about the encouraging
                                            information about our school
                                        </h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="kunTartibi">
                <div className="containerDoing">
                    <div className="agendaMain">
                        <div className="agendaLeft">
                            <div className="agendaCards">
                                <div className="innerLeft">
                                    <img src={Image21} alt="" />
                                </div>
                                <div className="innerRight">
                                    <h1>Study at home</h1>
                                    <p>
                                        The company itself is a very good and very nice company the
                                        whather itself.
                                    </p>
                                    <div className="arrow">
                                        <p>20 June</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="agendaCards">
                                <div className="innerLeft">
                                    <img src={Arrow2} alt="" />
                                </div>
                                <div className="innerRight">
                                    <h1>Teaching and Learning Activities in House</h1>
                                    <p>
                                        The company itself is a very good and very nice company the
                                        whather itself.
                                    </p>
                                    <div className="arrow">
                                        <p>20 June</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="agendaCards">
                                <div className="innerLeft">
                                    <img src={Arrow3} alt="" />
                                </div>
                                <div className="innerRight">
                                    <h1>Teaching and Learning Activities in House</h1>
                                    <p>
                                        The company itself is a very good and very nice company the
                                        whather itself.
                                    </p>
                                    <div className="arrow">
                                        <p>20 June</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="agendaCards">
                                <div className="innerLeft">
                                    <img src={Arrow4} alt="" />
                                </div>
                                <div className="innerRight">
                                    <h1>Online Learning Activities</h1>
                                    <p>
                                        The company itself is a very good and very nice company the
                                        whather itself.
                                    </p>
                                    <div className="arrow">
                                        <p>20 June</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="agendaRight">
                            <div className="rightCard">
                                <div className="rightInner">
                                    <img src={Icon} alt="" />
                                </div>
                                <div className="leftInner">
                                    <div className="arrow">
                                        <p>01 - 06 - 2021</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                    <p>Child Friendly School Declaration</p>
                                </div>
                            </div>
                            <div className="rightCard">
                                <div className="rightInner">
                                    <img src={Icon} alt="" />
                                </div>
                                <div className="leftInner">
                                    <div className="arrow">
                                        <p>01 - 06 - 2021</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                    <p>Distribution of Diplomas</p>
                                </div>
                            </div>
                            <div className="rightCard">
                                <div className="rightInner">
                                    <img src={SchoolBoy} alt="" />
                                </div>
                                <div className="leftInner">
                                    <div className="arrow">
                                        <p>01 - 06 - 2021</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                    <p>PPDB 2020/2021 Notification</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="gallery">
                <div className="containerGallery">
                    <h1>Gallery</h1>
                    <div className="galleryMain">
                        <div class="grid-container">
                            <div class="grid-item">
                                <img src={Image26} alt="" />
                            </div>
                            <div class="grid-item">
                                <img src={Image27} alt="" />
                            </div>
                            <div class="grid-item">
                                <img src={Image28} alt="" />
                            </div>
                            <div class="grid-item">
                                <img src={Image29} alt="" />
                            </div>
                            <div class="grid-item">
                                <img src={Image30} alt="" />
                            </div>
                            <div class="grid-item">
                                <img src={Image31} alt="" />
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <button>See More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
