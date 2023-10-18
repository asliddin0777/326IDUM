import React, { useEffect, useRef } from 'react'
import '../styles/contactPage.css'
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';

export const ContactPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const Post = () => {
        axios
            .post(
                "https://api.telegram.org/bot6048445366:AAHRQYzcDieznZusej6TfhFTf1vYTgnFtCc/sendMessage",
                {
                    chat_id: "5084090151",
                    text: `name: ${input.current.value}\nemail: ${email.current.value}\nphoneNumber: ${phoneNumber.current.value}\nmessage: ${message.current.value} `,
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((e) => console.log(e));
    };

    const input = useRef();
    const email = useRef();
    const phoneNumber = useRef();
    const message = useRef();
    return (
        <div data-aos="fade-up" className='contactPage'>
            <div className='containerContact'>
                <div data-aos="fade-up" className='contactForm'>
                    <form className='form'>
                        <div className='inputSection'>
                            <div className='input'>
                                <p>Name</p>
                                <input placeholder='name' name='name' ref={input}/>
                            </div>
                            <div className='input'>
                                <p>Email</p>
                                <input placeholder='emailkamu@gmail.com' type='email' name='email' ref={email}/>
                            </div>
                        </div>
                        <div className='phoneNumber'>
                            <p>Phone Number</p>
                            <input placeholder='+998 99 999 99 99' name='phoneNumber' ref={phoneNumber}/>
                        </div>
                        <div className='textAreaInput'>
                            <p>Message</p>
                            <textarea placeholder='Message...' name='message' ref={message}/>
                        </div>
                        <button className='button' onClick={() => {
                            Post()
                            alert("Your request has been sent")
                        }}>Send</button>
                    </form>
                </div>
                <div data-aos="fade-up" className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.619836285743!2d69.216270422551!3d41.355985946060315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dc87caf8d1b%3A0xa34c80783e2903ef!2s326%20maktab!5e1!3m2!1sru!2sus!4v1697570970898!5m2!1sru!2sus" width="100%" height="450" style={{ border: 0, borderRadius: 20 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
