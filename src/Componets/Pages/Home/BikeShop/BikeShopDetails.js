import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleBikeDetails } from '../../../Redux/Actions/bikeActions';
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import BikeShopMenu from './BikeShopMenu';


const BikeShopDetails = () => {
    const { id } = useParams();

    const { bike, loadding } = useSelector(state => state.bikeDetaileReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSingleBikeDetails(id))
    }, [dispatch, id])


    const date = new Date().getFullYear();


    return (
        <section>
            {
                loadding ?
                    <div class="d-flex justify-content-center" style={{ marginTop: '120px' }}>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container" style={{ marginTop: '120px' }}>
                        <BikeShopMenu />
                        <div className="row gy-5">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="bike-details-thub">
                                    <div className="fluid">
                                        <div className="fluid__image-container">
                                            <ReactImageMagnify {...{
                                                smallImage: {
                                                    alt: 'Wristwatch by Ted Baker London',
                                                    isFluidWidth: true,
                                                    src: bike?.photo,
                                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                                },
                                                largeImage: {
                                                    src: bike?.photo,
                                                    width: 1200,
                                                    height: 1800
                                                },
                                                enlargedImageContainerDimensions: {
                                                    width: '200%',
                                                    height: '100%'
                                                }
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="bike-details-content mt-5">
                                    <h5 className='fw-bold mb-4'>{bike?.name}</h5>
                                    <div className="sub-brand">
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Engine</span>   <span className='float-end'>{bike.bikeCC}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Maximum Power</span>   <span className='float-end'>{bike.maxPower}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Maximum Torque</span>   <span className='float-end'>{bike.maxTorque}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Top Speed</span>   <span className='float-end'>{bike.topSpeed}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Fuel System	</span>   <span className='float-end'>{bike.fuelStm}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Cooling System	</span>   <span className='float-end'>{bike.collingStm}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Ratio</span>   <span className='float-end'>{bike.ratio}</span></h6>
                                        <hr />
                                        <h6><span className='fw-bold me-5'>Color</span>   <span className='float-end'>{bike.bikeColor}</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-2">
                            <div className="text-center">
                                <Link to={`/bike-full-details/${bike?._id}`}>
                                    <button className='btn btn-success border-0 p-2 text-light fw-bold w-100 d-block'>Full Specifications of {bike.name}</button>
                                </Link>
                            </div>
                        </div>
                        <div className="bike-sub-title2">
                            <h5 className='fw-bold fs-6 mt-2 mb-2'>{bike?.name}</h5>
                            <div className="des-title">
                                <h6>{bike.name} Bike Price in BD {date}{bike.maxPower}and {bike.maxTorque} {bike?.topSpeed}{bike.bikeColor}{bike.fuelStm}{bike.ratio}bike abs{bike.bikeAbs}colling system{bike.collingStm}Meter{bike.techoMeter}{bike.collingStm}{bike.collingStm}USB{bike.usbPort}{bike?.name} price of BDT <span className='fw-bold text-primary'>{bike.price}. </span>find our Motorcycle Showrooms in Bangladesh.</h6>
                            </div>
                            <div className="seeDetaild text-center mt-5">
                                <p> <Link to={`/bike-full-details/${bike?._id}`} className='text-center fw-bold text-decoration-underline'>
                                    Full Specifications of Yamaha R15M WGP 60th Edition {date}
                                </Link></p>
                            </div>

                            <div className="progress-sec mt-5">
                                <h5 className='fw-bold mb-2 fs-6'>Performance:</h5>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">Design 75%</div>
                                </div>
                                <div class="progress mt-2 mb-2">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">Comfort 40%</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">Fuel 95%</div>
                                </div>
                                <div class="progress mt-2 mb-2">
                                    <div class="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">Top Speed 55%</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">Price 65%</div>
                                </div>
                            </div>
                            <div className="rating-sec mt-5 mb-2">
                                <h5 className='fw-bold fs-6'>Customers Rating:</h5>
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default BikeShopDetails;