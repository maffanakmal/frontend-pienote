import React from 'react'
import '../assets/Css/Profile.css'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProfileNavbarComp from '../components/ProfileNavbarComp'

const ProfileSetting = () => {

  const navigate = useNavigate()

  return (
    <>
      <ProfileNavbarComp/>
      <div className='d-flex align-items-center justify-content-center min-vh-100'>
      <Container className='settings'>
      <h2 className='text-center'>Pengaturan</h2>
      <Row className="mt-4">
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card onClick={() => navigate('/accountsetting')} className="w-100 setting-cards">
            <Card.Body>
              <Card.Title className='text-center mb-2'>Profile</Card.Title>
              <Card.Text>
                Kelola informasi akun Anda di sini. Perbarui detail pribadi, email, dan nomor handphone untuk menjaga akun Anda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card onClick={() => navigate('/passwordaccount')} className="w-100 setting-cards">
            <Card.Body>
              <Card.Title className='text-center mb-2'>Login & Security</Card.Title>
              <Card.Text>
                Keamanan akun Anda adalah prioritas kami. Ganti kata sandi Anda secara berkala untuk menjaga keamanan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100 setting-cards">
            <Card.Body>
              <Card.Title className='text-center mb-2'>Mata Uang</Card.Title>
              <Card.Text>
                Ubah pengaturan mata uang Anda hari ini dan nikmati pengalaman yang lebih terpersonalisasi dan efisien.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100 setting-cards">
            <Card.Body>
              <Card.Title className='text-center mb-2'>Bahasa</Card.Title>
              <Card.Text>
                Pilih bahasa yang Anda inginkan. Kami menawarkan berbagai pilihan bahasa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100 setting-cards">
            <Card.Body>
              <Card.Title className='text-center mb-2'>Tema Gelap</Card.Title>
              <Card.Text>
                Rasakan kesan elegan dan hemat daya dengan Tema Gelap. Aktifkan sekarang untuk gaya yang lebih keren dan baterai yang lebih awet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default ProfileSetting