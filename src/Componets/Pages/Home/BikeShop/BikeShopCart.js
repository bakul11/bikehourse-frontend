import React from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './BikeShop.css'

const BikeShopCart = ({ singleBike }) => {
    const { photo, name, price, _id } = singleBike;

    const navigate = useNavigate();
    //handle details
    const handleShowDetails = () => {
        navigate(`/bike-details/${_id}`)
    }
    return (
        <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12'>
            <Zoom>
                <div className="shadow-lg p-2 bike-item bg-light text-center" style={{ borderRadius: '10px', cursor: 'pointer' }} onClick={handleShowDetails}>
                    <img src={photo} alt={name} className='img-fluid' style={{ height: '170px' }} />
                    <h6 className='fw-bold mb-2'>{name}</h6>
                    <h6 className='text-primary'>BDT {price} Taka</h6>
                </div>
            </Zoom>
        </div>
    );
};

export default BikeShopCart;




























