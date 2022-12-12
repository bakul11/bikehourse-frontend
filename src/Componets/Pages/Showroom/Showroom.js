import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Showroom = () => {
    const { bike, loadding } = useSelector(state => state.bikeReducers);

    const navigate = useNavigate();

    const handleSubCategory = (id) => {
        navigate(`/showroomlocation/${id}`)
    }


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
                    <div className='container' style={{ marginTop: '120px' }}>
                        <div className="bike-showroom-cat">
                            <h6 className='fw-bold text-primary fs-5 text-center mb-5'>Motorcycle Showrooms in Bangladesh</h6>
                            <div className="row gy-2">
                                {
                                    bike?.map(bike => {
                                        return (
                                            <div className="col-lg-2">
                                                <p onClick={() => handleSubCategory(bike.showroom)}><FontAwesomeIcon icon={faMapMarker} className='me-1' /> <span className='text-capitalize' style={{ cursor: 'pointer' }}>{bike?.showroom}</span></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </section>

    );
};

export default Showroom;