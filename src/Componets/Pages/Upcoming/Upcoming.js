import React from 'react';
import { Zoom } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';
import swal from 'sweetalert';


const upData = [
    {
        logo: 'https://i.ibb.co/7n23pYg/Bajaj-Pulsar-P150-DD-Blue.jpg',
        title: 'Bajaj-Pulsar-P150-DD-Blue'
    },
    {
        logo: 'https://i.ibb.co/YfwLgrS/Bajaj-Pulsar-N160.jpg',
        title: 'Bajaj-Pulsar-N160'
    },
    {
        logo: 'https://i.ibb.co/H7819v0/Bajaj-Platina-110-ES-Red.jpg',
        title: 'Bajaj-Platina-110-ES-Red'
    },
    {
        logo: 'https://i.ibb.co/Nnxsn4L/Bajaj-Platina-100-ES-Disc.jpg',
        title: 'Bajaj-Platina-100-ES-Disc'
    },
    {
        logo: 'https://i.ibb.co/s1FHz1Y/Bajaj-CT125-X-Drum-Red.jpg',
        title: 'Bajaj-CT125-X-Drum-Red'
    },
    {
        logo: 'https://i.ibb.co/kKNbfPT/TVS-Raider-Smart-Xonnect-Yellow.jpg',
        title: 'TVS-Raider-Smart-Xonnect-Yellow'
    },
    {
        logo: 'https://i.ibb.co/FbYDCdg/TVS-Apache-RTR-180-2-V.jpg',
        title: 'TVS-Apache-RTR-180-2-V'
    },
    {
        logo: 'https://i.ibb.co/X4Dc4DH/Bajaj-Pulsar-P150-SD-Red.jpg',
        title: 'Bajaj-Pulsar-P150-SD-Red'
    }
]



const Upcoming = () => {
    const date = new Date().getFullYear();

    const handleShowUp = () => {
        swal('not available', 'upcoming bike not available in this moment!', 'error');
    }

    return (
        <div className='container' style={{ marginTop: '120px' }}>
            <div className='category-sec mb-5'>
                <div className="category-title text-center">
                    <RubberBand>
                        <h5 className='fw-bold mb-2'>Upcoming Latest Bike {date}</h5>
                        <h6>Get Your favorite bike from our Showrooms!</h6>
                    </RubberBand>
                </div>
            </div>
            <div className="row gy-3">
                {
                    upData?.map(bike => {
                        return (
                            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12'>
                                <Zoom>
                                    <div className="shadow-lg p-2 bike-item bg-light text-center" style={{ borderRadius: '10px', cursor: 'pointer' }} onClick={handleShowUp}>
                                        <img src={bike?.logo} alt={bike?.title} className='img-fluid' style={{ height: '170px' }} />
                                        <h6 className='fw-bold mb-2'>{bike?.title}</h6>
                                        {/* <h6 className='text-primary'>BDT not price</h6> */}
                                    </div>
                                </Zoom>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Upcoming;