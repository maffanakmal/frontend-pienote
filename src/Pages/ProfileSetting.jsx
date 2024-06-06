import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ProfileSetting = () => {
  return (
    <>
      <div className='setting-container min-vh-100 d-flex justify-content-center align-items-center'>
        <div className="settings">
          <h2 className='text-center'>Pengaturan</h2>
          <div className="settings-cards">
            <NavLink to="/profile">
              <div className="card" data-card="profile">
                <i classNameName="fa-solid fa-user text-center"></i>
                <h3>Profile</h3>
                <p>Kelola informasi akun Anda di sini. Perbarui detail pribadi, email, dan nomor handphone untuk menjaga akun Anda.</p>
              </div>
            </NavLink>
            <div className="card" data-card="security">
              <i className="fa-solid fa-shield text-center"></i>
              <h3>Login & security</h3>
              <p>Keamanan akun Anda adalah prioritas kami. Ganti kata sandi Anda secara berkala untuk menjaga keamanan.</p>
            </div>
            <div className="card" data-card="language">
              <i className="fa-solid fa-language text-center"></i>
              <h3>Bahasa</h3>
              <p>Pilih bahasa yang Anda inginkan. Kami menawarkan berbagai pilihan bahasa.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSetting