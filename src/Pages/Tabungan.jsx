import React from 'react';
import { Container, Row, Col, ProgressBar, Card, Button } from 'react-bootstrap';
import profileImg from "../assets/Image/people-1.webp";
import ProfileNavbarComp from '../Components/ProfileNav';
import "../assets/Css/Tabungan.css";
import { NavLink } from 'react-router-dom';


const SavingsDashboard = () => {
  const savings = [
    { title: "DP Rumah", amount: 50000000, progress: 8, date: "23 Desember 2024" },
    { title: "Beli Laptop", amount: 30000000, progress: 70, date: "15 Agustus 2024" },
    { title: "Umrah", amount: 80000000, progress: 5, date: "21 Oktober 2025" }
  ];

  const groupSavings = [
    { title: "Liburan Eropa", amount: 500000000, progress: 20, date: "17 Juni 2026", members: 4 },
    { title: "Villa Bali Akhir Tahun", amount: 150000000, progress: 50, date: "2 Desember 2024", members: 3 }
  ];

  const renderSavingsCard = (savings, isGroup = false) => (
    <Row className="rowTabungan">
      {savings.map((item, index) => (
        <Col md={4} key={index}>
          <Card className="mb-3 cardTabungan">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rp {item.amount.toLocaleString()}</Card.Subtitle>
              <ProgressBar now={item.progress} label={`${item.progress}%`} />
              <Card.Text className="mt-2">{item.date}</Card.Text>
              {isGroup && (
                <div>
                  {Array.from({ length: item.members }).map((_, idx) => (
                    <img key={idx} src={profileImg} alt="member" className="rounded-circle mr-1" width="10%" />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Col md={4}>
        <Card className="mb-3 d-flex align-items-center justify-content-center" style={{ height: '150px', backgroundColor: "#9EC5FE"}}>
          <Button className="mb-3" variant="primary">Tambah Tabungan</Button>
          <i class="fa-solid fa-plus"></i>
        </Card>
      </Col>
    </Row>
  );


  return (
    <>
    <ProfileNavbarComp/>
    <Container className='mt-5'>
    <NavLink><i class="fa-solid fa-arrow-left"></i></NavLink>
        

      <h1 className="mt-5">Tabungan</h1>
      <p>Rencanakan hari esokmu dengan setiap langkah hemat bersama fitur tabungan kami</p>
      
      <h3 className="mt-4">Tabungan Saya</h3>
      {renderSavingsCard(savings)}

      <h3 className="mt-4">Tabungan Bersama</h3>
      {renderSavingsCard(groupSavings, true)}

    </Container>
    </>
  );
};

export default SavingsDashboard;
