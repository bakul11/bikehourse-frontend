import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Zoom } from 'react-reveal';

const CategoryDetails = () => {
    const { cat } = useParams();
    const [brand, setBrand] = useState([]);


    useEffect(() => {
        fetch(`https://bikehourse.onrender.com/bike/category/${cat}`)
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [brand, cat])


    const navigate = useNavigate();

    //handle details
    const handleShowDetails = (id) => {
        navigate(`/bike-details/${id}`);
    }

    return (
        <section>
            {
                brand?.length === 0 ?
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
                        <h6 className='fw-bold fs-5 mb-3'>Brand Name {cat}</h6>
                        <div className="row">
                            {
                                brand?.map(single => {
                                    return (
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12'>
                                            <Zoom>
                                                <div className="shadow-lg p-2 bike-item bg-light text-center" style={{ borderRadius: '10px', cursor: 'pointer' }} onClick={() => handleShowDetails(single?._id)}>
                                                    <img src={single.photo} alt={single.name} className='img-fluid' style={{ height: '170px' }} />
                                                    <h6 className='fw-bold mb-2'>{single.name}</h6>
                                                    <h6 className='text-primary'>BDT {single.price} Taka</h6>
                                                </div>
                                            </Zoom>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </section>

    );
};

export default CategoryDetails;