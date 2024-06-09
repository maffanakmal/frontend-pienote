import React from 'react'
import {Container} from 'react-bootstrap'


const SettingsBahasa = () => {
    return (
        <>
        <Container className='w-100 min-vh-100'>
            <h1>Pengaturan Mata Uang</h1>
            <div className="currency-settings">
                <div className="selected-currency">
                    <h2>Mata Uang yang di pilih</h2>
                    <div className="currency">
                        <span>Indonesia Rupiah</span>
                        <span className="code">IDR</span>
                    </div>
                </div>
                <div className="currency-list">
                    <h2>Mata Uang</h2>
                    <div className="currency"><span>Amerika Serikat Dollar</span><span className="code">USD</span></div>
                    <div className="currency"><span>Arab Saudi Riyal</span><span className="code">SAR</span></div>
                    <div className="currency"><span>Australia Dollar</span><span className="code">AUD</span></div>
                    <div className="currency"><span>Belanda Euro</span><span className="code">EUR</span></div>
                    <div className="currency"><span>China Yuan</span><span className="code">RMB</span></div>
                    <div className="currency"><span>Filipina Peso</span><span className="code">PHP</span></div>
                    <div className="currency"><span>Jepang Yen</span><span className="code">JPY</span></div>
                    <div className="currency"><span>Korea Selatan Won</span><span className="code">KRW</span></div>
                    <div className="currency"><span>Malaysia Ringgit</span><span className="code">MYR</span></div>
                    <div className="currency"><span>Thailand Bath</span><span className="code">THB</span></div>
                </div>
            </div>
            </Container>
        </>
    )
}

export default SettingsBahasa