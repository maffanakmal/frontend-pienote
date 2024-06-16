import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SavingsCard from '../Components/SavingCard';

const savingsData = [
  { title: 'HP baru tahun depan', amount: 20000000, progress: 0, date: '25 Desember 2024', isFavorite: true, friends: [] },
  { title: 'DP Rumah', amount: 50000000, progress: 8, date: '23 Desember 2024', isFavorite: false, friends: [] },
  { title: 'Beli Laptop', amount: 30000000, progress: 70, date: '15 Agustus 2024', isFavorite: false, friends: [] },
  { title: 'Umrah', amount: 80000000, progress: 5, date: '21 Oktober 2025', isFavorite: false, friends: [] },
  { title: 'Liburan Eropa', amount: 500000000, progress: 20, date: '17 Juni 2026', isFavorite: false, friends: ['friend1.jpg', 'friend2.jpg', 'friend3.jpg'] },
  { title: 'Villa Bali Akhir Tahun', amount: 150000000, progress: 50, date: '2 Desember 2024', isFavorite: false, friends: ['friend4.jpg', 'friend5.jpg', 'friend6.jpg'] }
];

const SavingsPage = () => {
  return (
    <Container>
      <h1 className="mt-4">Tabungan</h1>
      <p>Rencanakan hari esokmu dengan setiap langkah hemat bersama fitur tabungan kami</p>

      <h3>Tabungan Saya</h3>
      <Row>
        {savingsData.slice(0, 3).map((savings, index) => (
          <Col md={4} key={index}>
            <SavingsCard {...savings} />
          </Col>
        ))}
        <Col md={4}>
          <Button style={{ backgroundColor: '#d1e7ff', width: '100%', height: '100%', borderRadius: '10px' }}>
            Tambah Tabungan
          </Button>
        </Col>
      </Row>

      <h3 className="mt-4">Tabungan Bersama</h3>
      <Row>
        {savingsData.slice(3).map((savings, index) => (
          <Col md={4} key={index}>
            <SavingsCard {...savings} />
          </Col>
        ))}
        <Col md={4}>
          <Button style={{ backgroundColor: '#d1e7ff', width: '100%', height: '100%', borderRadius: '10px' }}>
            Tambah Tabungan
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SavingsPage;
