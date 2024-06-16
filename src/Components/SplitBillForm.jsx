import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const SplitBillForm = ({ billId, friends }) => {
    const [values, setValues] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([{ id: 1 }]);

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const itemId = name.split('_')[1];
        
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    
        if (name.startsWith('jumlah_') || name.startsWith('harga_')) {
            const jumlah = parseFloat(name.startsWith('jumlah_') ? value : values[`jumlah_${itemId}`] || 0);
            const harga = parseFloat(name.startsWith('harga_') ? value : values[`harga_${itemId}`] || 0);
            const subTotal = jumlah * harga;
            
            setValues(prevValues => ({
                ...prevValues,
                [`sub_total_${itemId}`]: subTotal.toFixed(2)
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = {
                items: items.map(item => ({
                    item_name: values[`item_name_${item.id}`],
                    amount: values[`jumlah_${item.id}`],
                    price: values[`harga_${item.id}`],
                    sub_total: values[`sub_total_${item.id}`],
                    user_id: values[`add_friend_${item.id}`],
                    image_path: values[`upload_image_${item.id}`],
                    bill_id: billId, // Make sure billId is included in formData
                }))
            };
    
            const response = await axios.post(`http://localhost:8000/berbagitagihan/${billId}/items`, formData, { withCredentials: true });
    
            if (response.data.error) {
                setError(response.data.error);
                setShow(true);
                setTimeout(() => setShow(false), 5000);
            } else {
                setSuccess('Items added to bill successfully!');
                setShow(true);
                setTimeout(() => setShow(false), 4000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
            setError(errorMessage);
            setShow(true);
            setTimeout(() => setShow(false), 5000);
        }
    };

    const handleAddItem = () => {
        const newItem = { id: items.length + 1 };
        setItems([...items, newItem]);
    };

    const handleRemoveItem = (id) => {
        if (items.length > 1) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {items.map((item) => (
                <Row key={item.id} className='splitbill-input-row mt-3'>
                    {show && error && (
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <p>{error}</p>
                        </Alert>
                    )}
                    {show && success && (
                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            <p>{success}</p>
                        </Alert>
                    )}
                    <Col md='6'>
                        <div className='mb-3'>
                            <label htmlFor={`item_name_${item.id}`} className="form-label">Item</label>
                            <input
                                type="text"
                                name={`item_name_${item.id}`}
                                className="form-control fw-light rounded-2"
                                id={`item_name_${item.id}`}
                                placeholder='Enter item name'
                                onChange={(e) => handleChange(e, item.id)}
                                required
                            />
                        </div>
                        <Row className='input-harga'>
                            <Col md='4'>
                                <div className='mb-3'>
                                    <label htmlFor={`jumlah_${item.id}`} className="form-label">Jumlah</label>
                                    <input
                                        type="number"
                                        name={`jumlah_${item.id}`}
                                        className="form-control fw-light rounded-2"
                                        id={`jumlah_${item.id}`}
                                        placeholder='Jumlah'
                                        onChange={(e) => handleChange(e, item.id)}
                                        required
                                    />
                                </div>
                            </Col>
                            <Col md='8'>
                                <div className='mb-3'>
                                    <label htmlFor={`harga_${item.id}`} className="form-label">Harga</label>
                                    <input
                                        type="number"
                                        name={`harga_${item.id}`}
                                        className="form-control fw-light rounded-2"
                                        id={`harga_${item.id}`}
                                        placeholder='Harga'
                                        onChange={(e) => handleChange(e, item.id)}
                                        required
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className='mb-3'>
                            <label htmlFor={`sub_total_${item.id}`} className="form-label">SubTotal</label>
                            <input
                                type="text"
                                name={`sub_total_${item.id}`}
                                className="form-control fw-light rounded-2"
                                id={`sub_total_${item.id}`}
                                placeholder='SubTotal'
                                value={values[`sub_total_${item.id}`] || ''}
                                disabled
                            />
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="mb-3 my-auto">
                            {/* <label htmlFor={`add_friend_${item.id}`} className="form-label">SubTotal</label>
                            <input
                                type="text"
                                name={`add_friend_${item.id}`}
                                className="form-control fw-light rounded-2"
                                id={`add_friend_${item.id}`}
                                placeholder='tambah teman by ID'
                                onChange={(e) => handleChange(e, item.id)}
                            /> */}
                            <label className='form-label'>Teman</label>
                            <select
                                name={`add_friend_${item.id}`}
                                id={`add_friend_${item.id}`}
                                className="form-control fw-light rounded-2"
                                onChange={(e) => handleChange(e, item.id)}
                                required
                            >
                                <option value="">Select Friend</option>
                                {friends.map((friend, index) => (
                                    <option key={index} value={friend}>{friend}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor={`upload_image_${item.id}`} className="form-label">Upload Image</label>
                            <input
                                type="file"
                                name={`upload_image_${item.id}`}
                                className="form-control fw-light rounded-2"
                                id={`upload_image_${item.id}`}
                                onChange={(e) => handleChange(e, item.id)}
                            />
                        </div>
                        <Row className='button-item mt-5'>
                            <Col md='6' className='d-flex align-items-center justify-content-center'>
                                <Button variant='danger' className='w-100' onClick={() => handleRemoveItem(item.id)} disabled={items.length === 1}>
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </Col>
                            <Col md='6' className='d-flex align-items-center justify-content-center'>
                                <Button variant='success' className='w-100' type="button" onClick={handleAddItem}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ))}
            <Col md='6' className='d-flex justify-content-start align-items-center mt-3'>
                <Button type="submit" variant='success' className='w-50'>Tambah Item ke Tagihan</Button>
            </Col>
        </form>
    );
};

export default SplitBillForm;
