import React, {useEffect} from 'react'
import styles from '../../styles/studentsPage.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { TABLE_1A} from '../../constants'

export const StudentsPage = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div>
            <div  data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 A</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  id='1B' className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 B</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 G</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 D</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 E</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 V</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div data-aos="fade-up"  className={styles.studentsPage}>
                <div className={styles.containerStudent}>
                    <h2 style={{ marginTop: 20, marginBottom: 20 }}>1 J</h2>
                    <table className={styles.table2}>

                        <thead className={styles.thead}>
                            <tr className={styles.tableTr2}>
                                <th className={styles.tableTh2}>Number</th>
                                <th className={styles.tableTh2}>Name</th>
                                <th className={styles.tableTh2}>Quarter Grade</th>
                                <th className={styles.tableTh2}>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_1A.map((e, index) => {
                                return (
                                    <tr className={styles.tableTr2}>
                                        <td className={styles.tableTd2}>
                                            {index + 1}
                                        </td>
                                        <td className={styles.tableTd2}>{e.name}</td>
                                        <td className={styles.tableTd2}>{e.module}</td>
                                        <td className={styles.tableTd2}>{e.mark}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
