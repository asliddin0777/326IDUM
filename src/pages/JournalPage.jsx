import React, { useState, useEffect } from 'react'
import '../styles/journalPage.css'
import JournalBack from '../components/local/JournalBack'
import Table from '../components/local/Table'
import { STUDY_TABLE, STUDY_TABLE_LUNCH } from '../constants'
import AOS from "aos";
import "aos/dist/aos.css";

export const JournalPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [isOpened, setIsOpened] = useState(false);
    const [isSelected, setIsSelected] = useState(0);
    return (
        <div  data-aos="fade-up"  className='journalPage'>
            <JournalBack />
            <div className='journalContainer'>
                <h1 className='journalTitle'>Class & Table</h1>
                <Table />
                <div data-aos="fade-up" className='studentStudy'>
                    <h1 className='journalTitle'>Student Study Schedule</h1>
                    <div data-aos="fade-up" className="studyTable">
                        {STUDY_TABLE.map((e) => {
                            return (
                                <div
                                    key={e}
                                    onClick={() => {
                                        setIsOpened(!isOpened);
                                        setIsSelected(e);
                                        if (isSelected === e) {
                                            setIsSelected(null);
                                        } else {
                                            setIsSelected(e);
                                        }
                                    }}
                                    className="tableCards"
                                >
                                    <div className="card">
                                        <div className='cardList'>
                                            <h3>{e.title}</h3>
                                            <button
                                                onClick={() => {
                                                    setIsOpened(!isOpened);
                                                }}
                                            >
                                                <img
                                                    style={
                                                        isSelected !== e
                                                            ? {
                                                                transform: "rotate(-180deg)",
                                                                width: 40,
                                                                height: 30
                                                            }
                                                            : {
                                                                width: 40,
                                                                height: 30
                                                            }
                                                    }
                                                    src={require('../assets/images/arrow.jpg')}
                                                    alt="chevron icon"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <table className='tableJouranl'>
                                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                                            <tr className='tr'>
                                                <th className='th'>Lesson</th>
                                                <th className='th'>Study Time</th>
                                                <th className='th'>Break Time</th>
                                            </tr>
                                            <tr>
                                                <td className='td1'>1</td>
                                                <td className='td1'>8:00 - 9:10</td>
                                                <td className='td1'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>2</td>
                                                <td className='td'>9:15 - 9:55</td>
                                                <td className='td'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td1'>3</td>
                                                <td className='td1'>10:00 - 10:40</td>
                                                <td className='td1'>15</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>4</td>
                                                <td className='td'>10:55 - 11:35</td>
                                                <td className='td'>5</td>

                                            </tr>
                                            <tr>
                                                <td className='td1'>5</td>
                                                <td className='td1'>11:40 - 12:20</td>
                                                <td className='td1'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>6</td>
                                                <td className='td'>12:25 - 13:05</td>
                                                <td className='td'>5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </div>
                    <div data-aos="fade-up" className="studyTable">
                        {STUDY_TABLE_LUNCH.map((e) => {
                            return (
                                <div
                                    key={e}
                                    onClick={() => {
                                        setIsOpened(!isOpened);
                                        setIsSelected(e);
                                        if (isSelected === e) {
                                            setIsSelected(null);
                                        } else {
                                            setIsSelected(e);
                                        }
                                    }}
                                    className="tableCards"
                                >
                                    <div className="card">
                                        <div className='cardList'>
                                            <h3>{e.title}</h3>
                                            <button
                                                onClick={() => {
                                                    setIsOpened(!isOpened);
                                                }}
                                            >
                                                <img
                                                    style={
                                                        isSelected !== e
                                                            ? {
                                                                transform: "rotate(-180deg)",
                                                                width: 40,
                                                                height: 30
                                                            }
                                                            : {
                                                                width: 40,
                                                                height: 30
                                                            }
                                                    }
                                                    src={require('../assets/images/arrow.jpg')}
                                                    alt="chevron icon"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <table className='tableJouranl'>
                                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                                            <tr className='tr'>
                                                <th className='th'>Lesson</th>
                                                <th className='th'>Study Time</th>
                                                <th className='th'>Break Time</th>
                                            </tr>
                                            <tr>
                                                <td className='td1'>1</td>
                                                <td className='td1'>13:10 - 13:50</td>
                                                <td className='td1'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>2</td>
                                                <td className='td'>13:55 - 14:35</td>
                                                <td className='td'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td1'>3</td>
                                                <td className='td1'>14:40 - 15:20</td>
                                                <td className='td1'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>4</td>
                                                <td className='td'>15:25 - 16:05</td>
                                                <td className='td'>5</td>

                                            </tr>
                                            <tr>
                                                <td className='td1'>5</td>
                                                <td className='td1'>16:10 - 16:50</td>
                                                <td className='td1'>5</td>
                                            </tr>
                                            <tr>
                                                <td className='td'>6</td>
                                                <td className='td'>16:55 - 17:35</td>
                                                <td className='td'>5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
