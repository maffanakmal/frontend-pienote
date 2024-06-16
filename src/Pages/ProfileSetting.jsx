import React from 'react'
import '../assets/Css/Profile.css'
import {Card} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ProfileSetting = () => {
  return (
    <>
      <Container style={{ marginTop: '20px', backgroundColor: '#e0f0ff', padding: '20px', borderRadius: '10px' }}>
      <h2>Pengaturan</h2>
      <Row className="mt-4">
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100">
            <Card.Body>
              <Card.Title>PROFILE</Card.Title>
              <Card.Text>
                Kelola informasi akun Anda di sini. Perbarui detail pribadi, email, dan nomor handphone untuk menjaga akun Anda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Login & Security</Card.Title>
              <Card.Text>
                Keamanan akun Anda adalah prioritas kami. Ganti kata sandi Anda secara berkala untuk menjaga keamanan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Mata Uang</Card.Title>
              <Card.Text>
                Ubah pengaturan mata uang Anda hari ini dan nikmati pengalaman yang lebih terpersonalisasi dan efisien.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Bahasa</Card.Title>
              <Card.Text>
                Pilih bahasa yang Anda inginkan. Kami menawarkan berbagai pilihan bahasa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Tema Gelap</Card.Title>
              <Card.Text>
                Rasakan kesan elegan dan hemat daya dengan Tema Gelap. Aktifkan sekarang untuk gaya yang lebih keren dan baterai yang lebih awet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default ProfileSetting