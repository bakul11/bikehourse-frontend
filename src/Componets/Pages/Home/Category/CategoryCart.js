import React from 'react';
import { Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './Category.css'

const CategoryCart = ({ category }) => {
    const { title, logo, cat } = category;
    const navigate = useNavigate();

    const handleSubCategory = () => {
        navigate(`/brand/${cat}`)
    }

    return (
        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12'>
            <Zoom>
                <div className="categoty-item shadow-lg p-2" onClick={handleSubCategory}>
                    <img src={logo} alt={title} className='img-fluid' />
                    <h6 className='text-uppercase fw-bold'>{title}</h6>
                </div>
            </Zoom>
        </div>
    );
};

export default CategoryCart;