import React from 'react'
import '../assets/Css/Rate.css'

const Rating = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo"></div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div classNameName="profile"></div>
    </div>
    <div classNameName="feedback-form">
        <h2>Kami ingin mendengar pendapat Anda!</h2>
        <p>Bagikan pengalaman Anda dengan kami melalui ulasan singkat. Umpan balik Anda sangat membantu kami untuk terus meningkatkan layanan.</p>
        <h3>Seberapa Puas Anda dengan Aplikasi Kami?</h3>
        <div className="stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
        </div>
        <textarea placeholder="Berikan Komentar"></textarea>
        <button>Kirim</button>
    </div>
    </>
  )
}

export default Rating