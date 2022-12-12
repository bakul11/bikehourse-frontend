import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RubberBand from 'react-reveal/RubberBand';
import BikeCartLoadding from '../../../Animation/BikeCartLoadding';
import { getAllBike } from '../../../Redux/Actions/bikeActions';
import BikeShopCart from './BikeShopCart';

const BikeShop = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const { loadding, bike } = useSelector(state => state.bikeReducers);




    //load data
    useEffect(() => {
        dispatch(getAllBike())
    }, [dispatch])


    return (
        <section className='catagory' style={{ marginTop: '120px' }}>
            <div className='singleBike-sec mb-5'>
                <div className="singleBike-title text-center">
                    <RubberBand>
                        <h5 className='fw-bold mb-2'>Dream Latest Bike</h5>
                        <h6>Get Your Desired Product from Featured bike!</h6>
                    </RubberBand>
                </div>
            </div>
            <div className="cat-cart">
                <div className="row gy-2">
                    {
                        loadding ?
                            <>
                                <BikeCartLoadding />
                                <div className="bkiload mt-3 mb-3"></div>
                                <BikeCartLoadding />
                            </> :
                            show ?
                                bike?.map(singleBike => <BikeShopCart singleBike={singleBike} key={singleBike?.id} />)
                                : bike?.slice(0, 18).map(singleBike => <BikeShopCart singleBike={singleBike} key={singleBike?.id} />)
                    }
                </div>
                <div className="showbtn text-center mt-5">
                    {
                        loadding ?
                            <div className='text-center'>
                                <Skeleton animation='wave' variant="rounded mx-auto" height={40} className='mt-2' style={{ background: 'lightgray', width: '150px' }} />
                            </div>
                            :
                            <button className="btn btn-danger fw-bold" onClick={() => setShow(!show)}>See All Latest Bike <FontAwesomeIcon icon={faArrowRightToBracket} className='ms-1' /></button>
                    }

                </div>
            </div>
        </section>
    );
};

export default BikeShop;