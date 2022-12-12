import React from 'react';
import Upcoming from '../Upcoming/Upcoming';
import BikeShop from './BikeShop/BikeShop';
import Category from './Category/Category';
import HeroBanner from './HeroBanner/HeroBanner';

const Home = () => {
    return (
        <section>
            <div className='container-fluid p-0 m-0'>
                <HeroBanner />
            </div>
            <div className='container-fluid ps-5 pe-5'>
                <Category />
                <BikeShop />
                <Upcoming />
            </div>
        </section>
    );
};

export default Home;