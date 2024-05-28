import '../assets/Css/NavBar-Footer.css'
import React from 'react';
import footerImg from "../assets/Image/pienotes-logomark-w.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-2 col-sm-6">
                            <a href="#"><img src={footerImg} alt="" width="100px" /></a>
                            <div className="social-icons mt-3">
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="mb-0 text-white">Home</h5>
                            <ul>
                                <li><a href="#">Tabungan</a></li>
                                <li><a href="#">Catatan Keuangan</a></li>
                                <li><a href="#">Berbagi Tagihan</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="mb-0 text-white">News</h5>
                            <ul>
                                <li><a href="#">Article</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="mb-0 text-white">About</h5>
                            <ul>
                                <li><a href="#">Anggota</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="mb-0 text-white">Contact us</h5>
                            <ul>
                                <li><a href="#">Hubungi Kami</a></li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <p className="mb-0 text-white">Copyright 2024 PIXEL PERFECT.
                                All rights reserved.
                                Persyaratan layanan | Kebijakan privasi</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer-bottom">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-auto">
                            <p className="text-white mb-0">Copyright &copy; Pixel Perfect. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    );
}

export default Footer;
