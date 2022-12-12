import React from 'react';
import { useSelector } from 'react-redux';

const BikeRightSub = () => {
    const { bike } = useSelector(state => state.bikeDetaileReducer)
    return (
        <div className='bike-sec-right'>
            <img src={bike.photo} alt={bike.name} className='img-fuild' style={{ height: '300px' }} />
            <h6 className='text-primary mb-3'>BDT : {bike.price} Taka</h6>
            <div className="bike-btn mt-2">
                <h6 className="bg-primary text-center rounded text-light p-2 w-100 d-block" disabled>{bike.name}</h6>
            </div>
            <div className="full-detaile-bike text-center mt-3 mb-3">
                <h5>Full Specifications of {bike?.name}</h5>
            </div>
            <div className="bike-all-details">
                <div className="sub-brand">
                    <hr />
                    <h6><span className='fw-bold me-5'>Brand name</span>  <span className='float-end'>{bike.name}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Engine</span>   <span className='float-end'>{bike.bikeCC}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Brand</span>   <span className='float-end'>{bike.brand}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Speed</span>   <span className='float-end'>{bike.bikeOil}</span></h6>
                </div>
                <h6 className='text-primary fw-bold mt-3 mb-3'>Engine & transmission</h6>
                <div className="sub-brand">
                    <hr />
                    <h6><span className='fw-bold me-5'>Maximum Power</span>   <span className='float-end'>{bike.maxPower}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Maximum Torque</span>   <span className='float-end'>{bike.maxTorque}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Mileage</span>   <span className='float-end'>{bike.topSpeed}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Fuel System	</span>   <span className='float-end'>{bike.fuelStm}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Cooling System	</span>   <span className='float-end'>{bike.collingStm}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Ratio</span>   <span className='float-end'>{bike.ratio}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Color</span>   <span className='float-end'>{bike.bikeColor}</span></h6>
                </div>
                <h6 className='text-primary fw-bold mt-3 mb-3'>Engine Body</h6>
                <div className="sub-brand">
                    <hr />
                    <h6><span className='fw-bold me-5'>Length</span>   <span className='float-end'>{bike.bikeLength}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Width</span>   <span className='float-end'>{bike.bikeWidth}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Weight</span>   <span className='float-end'>{bike.bikeWeight}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Gears	</span>   <span className='float-end'>{bike.gears}</span></h6>
                </div>
                <h6 className='text-primary fw-bold mt-3 mb-3'>Features</h6>
                <div className="sub-brand">
                    <hr />
                    <h6><span className='fw-bold me-5'>Speedometer</span>   <span className='float-end'>{bike.speedMeter}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Odometer</span>   <span className='float-end'>{bike.odoMeter}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Techometer</span>   <span className='float-end'>{bike.techoMeter}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Clock	</span>   <span className='float-end'>{bike.clock}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Gears Display	</span>   <span className='float-end'>{bike.gearDisplay}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>Automatic Headlamp </span>   <span className='float-end'>{bike.setType}</span></h6>
                    <hr />
                    <h6><span className='fw-bold me-5'>USB Port	</span>   <span className='float-end'>{bike.usbPort}</span></h6>
                </div>
                <h6 className='text-primary fw-bold mt-3 mb-3'>Safety</h6>
                <div className="sub-brand">
                    <hr />
                    <h6><span className='fw-bold me-5'>ABS</span>   <span className='float-end'>{bike.bikeAbs}</span></h6>
                
                </div>
            </div>
        </div>
    );
};

export default BikeRightSub;