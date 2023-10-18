import React, { useState } from 'react'
import '../../styles/journalPage.css'
import { TABLE, TABLE_2, TABLE_3, TABLE_4, TABLE_5, TABLE_6, TABLE_7, TABLE_8, TABLE_9, TABLE_10, TABLE_11 } from '../../constants'

const Table = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isSelected, setIsSelected] = useState(0);


    return (
        <div className='table'>
            <table className='tableJouranl'>
                {TABLE.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>

                            <tr onClick={() => window.open("/students")}>
                                <td className='td1'>1</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td'>1</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td1'>1</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td'>1</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td1'>1</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td'>1</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students")}>
                                <td className='td1'>1</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_2.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr  onClick={() => window.open("/students-2")}>
                                <td className='td1'>2</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td'>2</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td1'>2</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td'>2</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td1'>2</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td'>2</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-2")}>
                                <td className='td1'>2</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_3.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-3")}>
                                <td className='td1'>3</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr  onClick={() => window.open("/students-3")}>
                                <td className='td'>3</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr  onClick={() => window.open("/students-3")}>
                                <td className='td1'>3</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr  onClick={() => window.open("/students-3")}>
                                <td className='td'>3</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-3")}>
                                <td className='td1'>3</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-3")}>
                                <td className='td'>3</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-3")}>
                                <td className='td1'>3</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_4.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td1'>4</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td'>4</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td1'>4</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td'>4</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td1'>4</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td'>4</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-4")}>
                                <td className='td1'>4</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_5.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td1'>5</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td'>5</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td1'>5</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td'>5</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td1'>5</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td'>5</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-5")}>
                                <td className='td1'>5</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_6.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td1'>6</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td'>6</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td1'>6</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td'>6</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td1'>6</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td'>6</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-6")}>
                                <td className='td1'>6</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_7.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td1'>7</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td'>7</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td1'>7</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td'>7</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td1'>7</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td'>7</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-7")}>
                                <td className='td1'>7</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_8.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td1'>8</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td'>8</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td1'>8</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td'>8</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td1'>8</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td'>8</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-8")}>
                                <td className='td1'>8</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_9.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td1'>9</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td'>9</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td1'>9</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td'>9</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td1'>9</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td'>9</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-9")}>
                                <td className='td1'>9</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_10.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td1'>10</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td'>10</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td1'>10</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td'>10</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td1'>10</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td'>10</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-10")}>
                                <td className='td1'>10</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}

                {TABLE_11.map((e) => {
                    return <>
                        <tr className='tableTitle' onClick={() => {
                            setIsOpened(!isOpened);
                            setIsSelected(e);
                            if (isSelected === e) {
                                setIsSelected(null)
                            } else {
                                setIsSelected(e)
                            }
                        }}>
                            <th className='th'>No {e.id}</th>
                            <th className='th'>Curator</th>
                            <th className='th'>Gender</th>
                            <th className='th'>Class</th>
                        </tr>
                        <tbody className={isSelected !== e ? 'dn' : 'just'} key={e}>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td1'>11</td>
                                <td className='td1'>Abdumalikov Asliddin</td>
                                <td className='td1'>M</td>
                                <td className='td1'>A</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td'>11</td>
                                <td className='td'>Haytboyeva Nargiza</td>
                                <td className='td'>F</td>
                                <td className='td'>B</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td1'>11</td>
                                <td className='td1'>Avazbek Shukurjonov</td>
                                <td className='td1'>M</td>
                                <td className='td1'>G</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td'>11</td>
                                <td className='td'>Jumaniyazova Dilfuza</td>
                                <td className='td'>F</td>
                                <td className='td'>D</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td1'>11</td>
                                <td className='td1'>Safarov Feruzbek</td>
                                <td className='td1'>M</td>
                                <td className='td1'>E</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td'>11</td>
                                <td className='td'>Boriyev Habibulloh</td>
                                <td className='td'>M</td>
                                <td className='td'>V</td>
                            </tr>
                            <tr onClick={() => window.open("/students-11")}>
                                <td className='td1'>11</td>
                                <td className='td1'>Kozimov Muzaffar</td>
                                <td className='td1'>M</td>
                                <td className='td1'>J</td>
                            </tr>
                        </tbody>

                    </>
                })}
            </table>
        </div>
    )
}

export default Table