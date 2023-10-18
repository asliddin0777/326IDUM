import React, { useState } from "react";
import FileUpload from "./Pdf";
import '../../styles/aboutHeaTech.css'

const AboutHeaTech = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="hBotom">
                <div className="container">
                    <div className="download">
                        <div className="pdfDownload">
                            <h1>Circular Letter for All Elementary Schools</h1>
                            <FileUpload />
                        </div>
                        <div className="pdfDownload">
                            <h1>Circular Letter for All Elementary Schools</h1>
                            <FileUpload />
                        </div>
                    </div>
                    <div className="hBotomMain">
                        <p>
                            Information about the director of our school, <br /> Iroda
                            Yoldashbekova, is provided, <br /> and through this information
                            you can get information about her.
                        </p>
                        <button onClick={handleButtonClick}>More Information</button>
                    </div>
                </div>
            </div>
            <div className="containerModal">
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>
                                Information{" "}
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
                            </p>
                            <h3>
                                For your information, registration for the 2021-2022 period for
                                the Affirmation, Transfer of Parents/Guardians, and Achievements
                                route will be open from 28 June to 2 July 2021, while for the
                                Zoning route it will be open on 5 July – 9 July 2021 The
                                registration simulation has been opened, but outside the date
                                mentioned above, it will be deleted again <br /> Thank You Admin
                                PPDB SMPN 1 Cibadak
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutHeaTech;
