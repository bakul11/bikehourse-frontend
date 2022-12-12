import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categoryData = [
    {
        id: 1,
        title: 'suzuki',
        cat: 'suzuki'
    },
    {
        id: 2,
        title: 'yamaha',
        cat: 'yahama'
    },
    {
        id: 3,
        title: 'tvs',

        cat: 'tvs'
    },
    {
        id: 4,
        title: 'hero',

        cat: 'hero'
    },
    {
        id: 5,
        title: 'keeway',

        cat: 'keeway'
    },
    {
        id: 6,
        title: 'runner',

        cat: 'runner'
    },
    {
        id: 7,
        title: 'lifan',

        cat: 'lifan'
    },
    {
        id: 8,
        title: 'royal',

        cat: 'royal'
    },
    {
        id: 9,
        title: 'kawasaki',

        cat: 'kewasaki'
    },
    {
        id: 13,
        title: 'h-Power',

        cat: 'hpower'
    },
    {
        id: 11,
        title: 'honda',

        cat: 'honda'
    },
    {
        id: 12,
        title: 'bajaj',

        cat: 'bajaj'
    },
    {
        id: 14,
        title: 'walton',

        cat: 'walton'
    },
    {
        id: 15,
        title: 'ktm',

        cat: 'ktm'
    }
]

const BikeLeftSub = () => {
    const { bike } = useSelector(state => state.bikeReducers);
    const navigate = useNavigate();
    //handle details
    const handleShowDetails = (id) => {
        navigate(`/brand/${id}`)
    }

    return (
        <div className='' style={{ borderRight: '1px solid lightgray', height: '100vh' }}>
            <div className="bike-brand-cat">
                <h6 className='fw-bold text-primary'>Brands</h6>
                {
                    categoryData?.map(bike => {
                        return <p><FontAwesomeIcon icon={faMotorcycle} className='me-1' /> <span className='text-capitalize' style={{ cursor: 'pointer' }} onClick={() => handleShowDetails(bike?.cat)}>{bike?.title}</span></p>
                    })
                }
            </div>
           
        </div >
    );
};

export default BikeLeftSub;