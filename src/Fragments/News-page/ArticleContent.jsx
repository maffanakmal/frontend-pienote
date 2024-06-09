import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import headerImgArticle from '../../assets/Image/Article-5.png'
import contentImgArticle from '../../assets/Image/Article-6.png'
import '../../assets/Css/News.css'

const ArticleContent = () => {
    return (
        <>
            <Container className='article-content-wrapper p-5 m-5'>
                <NavLink to='/article' className='mb-3 fs-5'><i class="fa-solid fa-arrow-left"></i> Kembali</NavLink>
                <Row md='8' className='d-flex align-items-center justify-content-center'>
                    <h1 className='mb-4'>Trik menabung bersama teman!</h1>
                    <img className='mb-4 w-auto' src={headerImgArticle} alt=""/>
                    <p className='fs-5'>Melakukan banyak kegiatan bareng teman bisa mempererat tali pertemanan. Supaya bisa sering ngadain acara bareng, kamu dan teman bisa mulai menabung bareng. Ada 4 trik yang bisa kamu pakai supaya menabung berjalan lancar dan jadi terasa menyenangkan.</p>
                </Row>
                <Row md='8' className='d-flex align-items-center justify-content-center p-5'>
                    <p className='fs-4 fw-bolder mb-3'>4 Trik dan Cara Menabung Bareng Teman</p>
                    <ol>
                        <li>
                            <p className='fs-5 mb-2'>
                                Tentukan siapa saja yang mau diajak nabung bareng <br/>
                                Ada yang lebih senang beraktivitas dalam kelompok besar supaya lebih seru, ada yang lebih senang dalam kelompok kecil supaya lebih akrab. Sebelum mulai menabung bareng, kamu bisa diskusikan dulu siapa saja yang mau diajak bergabung supaya ketahuan total anggota. Baiknya, setiap anggota punya ketertarikan yang sama terhadap kegiatan atau acara yang diadakan.
                            </p>
                        </li>
                        <li>
                            <p className='fs-5 mb-2'>
                                Tentukan kontribusi masing-masing anggota <br/>
                                Berdasarkan tujuan yang ingin dicapai, misalnya ngadain potluck setiap 2 minggu sekali atau dinner mewah 1 kali sebulan, kamu dan teman lalu menyepakati berapa kontribusi yang harus diberikan setiap anggota.
                            </p>
                        </li>
                        <li>
                            <p className='fs-5 mb-2'>
                                Tentukan kapan kontribusi harus dibayarkan <br/>
                                Selanjutnya, kamu dan teman juga perlu menyepakati kapan setiap anggota harus membayar jumlah yang sudah ditentukan. Misalnya, apakah setelah gajian, pada awal bulan atau setiap minggu. Pastikan setiap anggota merasa nyaman dengan jadwal pembayaran.
                            </p>
                        </li>
                        <li>
                            <p className='fs-5 mb-4'>
                                Gunakan Tabungan Bersama sebagai tempat mencatat tabungan bersama dari PieNote 
                            </p>
                        </li>
                    </ol>
                    <img className='mb-5 w-auto' src={contentImgArticle} alt=""/>
                    <p className='fs-5'>
                    Terakhir, hal yang nggak kalah penting adalah menemukan tempat catatan menabung yang mudah, praktis dan menyenangkan. Kamu bisa gunakan Tabunan Bersama di PieNote. <br/>
                    Setiap anggota bisa update catatan uang ke PieNote dan melihat riwayat transaksi demi menjaga transparansi. Selain itu, apabila ada anggota yang lupa membayar kontribusinya, PieNote siap sedia untuk mengingatkan mereka lewat notifikasi.
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default ArticleContent