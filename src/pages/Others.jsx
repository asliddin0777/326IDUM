import React, {useEffect} from 'react'
import '../styles/otherPage.css'
import AOS from "aos";
import "aos/dist/aos.css";

export const Others = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div  data-aos="fade-up" className="main">
            <div className="text">
                <h1 className="t1">Sejarah SMP Negeri 1 Cibadak Kab. Sukabumi</h1>
                <h3 className="t2">
                    SMP Negeri 1 CIbadak didirikan pada tahun 1965 berdasarkan Surat
                    Keputusan Menteri P & K Republik Indonesia. Pada mulanya, Sekolah
                    didirikan di daerah kebon pala yang sekarang menjadi Pasar &
                    Terminal cibadak. Berangkat dari antusias dan kepedulian masyarakat
                    terhadap dunia pendidikan, maka sekolah ini resmi berdiri dengan
                    nama SMP Cibadak. SMP Negeri 1 Cibadak sebagai bagian dari dunia
                    pendidikan yang berada di Kecamatan Cibadak mempunyai peranan yang
                    sangat penting dalam meningkatkan sumber daya manusia Indonesia
                    seutuhnya pada anak usia sekolah khususnya pada jenjang Sekolah
                    menengah pertama, yang berada di Kabupaten Sukabumi. Kemajuan Ilmu
                    Pengetahuan dan Teknologi yang semakin cenderung membuat orang
                    semakin sibuk dalam mengupayakan urusan duniawi. Mereka seolah-olah
                    melupakan kebutuhan manusia yang paling utama yaitu kebutuhan akan
                    pendidikan akhlak yang akan menjamin kebahagiaan dunia maupun
                    akhirat. Hal ini tidak hanya terjadi di kota-kota besar saja, bahkan
                    dampaknya ke daerah-daerah pedesaan sudah semakin terasa. Oleh
                    karena itu. SMP Negeri 1 Cibadak merupakan salah satu pilihan bagi
                    masyarakat untuk menyekolahkan putra-putrinya setelah tamat SD/MI,
                    yang dapat memberikan Ilmu Pengetahuan pada peserta didiknya. SMP
                    Negeri 1 Cibadak, keberadaannya sangat diperlukan oleh masyarakat di
                    lingkungan Kecamatan Cibadak, khususnya dan umumnya oleh masyarakat
                    sekitar. Mereka berharap dengan menyekolahkan anaknya di SMP,
                    sedikit banyak dapat membantu peran orang tua dalam menyelamatkan
                    putra-putrinya dari bahaya yang di akibatkan oleh dampak negatif
                    kemajuan Ilmu pengetahuan dan teknologi serta pengaruh perkembangan
                    zaman dan dari pergaulan lingkungan yang negatif. Kegiatan Belajar
                    Mengajar yang diselenggarakan keberadaanya sangat membantu
                    masyarakat dalam memenuhi tuntutan pengetahuan melalui jalur bidang
                    pendidikan terutama pendidikan agama Islam, sehingga segenggam
                    harapan terlahir dari hati nurani yang sangat dalam yang di motivasi
                    oleh semangat belajar siswa/i serta simpati masyarakat sekitar,
                    walau dalam kondisi ekonomi yang tak menentu, namun mereka tetap
                    berupaya untuk dapat ke luar dari kebodohan dan keterbelakangan,
                    guna mengejar ketinggalan langkah.
                </h3>
            </div>
        </div>
    )
}
