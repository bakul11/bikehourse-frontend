import React from 'react';
import { Link } from 'react-router-dom';

const BikeShopMenu = () => {
    return (
        <div className='container'>
            <div className="submenu">
                <ul className='d-flex align-items-center'>
                    <li>
                        <Link to='/' className='text-dark'>Home</Link>
                    </li>
                    <li>
                        <p className='me-2 ms-2'>/</p>
                    </li>
                    <li>
                        <Link to='/brand' className='text-dark'>Brands</Link>
                    </li>
                    <li>
                        <p className='me-2 ms-2'>/</p>
                    </li>
                    <li>
                        <Link to='/showroom' className='text-dark'>Showrooms</Link>
                    </li>
                    <li>
                        <p className='me-2 ms-2'>/</p>
                    </li>
                    <li>
                        <Link to='/upcoming' className='text-dark'>Upcoming</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BikeShopMenu;