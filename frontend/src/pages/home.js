import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsBrowserEdge } from 'react-icons/bs';
import { FaPills } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [jumlahObat, setJumlahObat] = useState(0);
    const [jumlahKustomer, setJumlahKustomer] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obatResponse = await axios.get('http://localhost:5000/obat'); // Ganti URL ini dengan endpoint API yang sesuai
                setJumlahObat(obatResponse.data.length);
                
                const kustomerResponse = await axios.get('http://localhost:5000/users'); // Ganti URL ini dengan endpoint API yang sesuai
                setJumlahKustomer(kustomerResponse.data.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3 style={{ color: 'white' }}>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card' onClick={() => navigate('/obat')}>
                    <div className='card-inner'>
                        <h3>OBAT</h3>
                        <FaPills className='card_icon' />
                    </div>
                    <h1>{jumlahObat}</h1>
                </div>
                <div className='card' onClick={() => navigate('/users')}>
                    <div className='card-inner'>
                        <h3>KUSTOMER</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{jumlahKustomer}</h1>
                </div>
            </div>
        </main>
    );
}

export default Home;
