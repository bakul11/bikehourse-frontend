import React from 'react';
import { useSelector } from 'react-redux';
import BikeLeftSub from './BikeLeftSub';
import BikeRightSub from './BikeRightSub';
import BikeShopMenu from './BikeShopMenu';

const BikeFullDetails = () => {
    const { bike, loadding } = useSelector(state => state.bikeDetaileReducer)
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
                        <div className="row gy-3">
                            <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                                <BikeLeftSub />
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                <BikeShopMenu />
                                <BikeRightSub />
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default BikeFullDetails;