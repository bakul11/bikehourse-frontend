import React from 'react';
import CategoryCart from './CategoryCart';
import RubberBand from 'react-reveal/RubberBand';
// =====================Import All Image for Category========================
import suzuki from '../../../../images/category/suzuki.jpg'
import yamaha from '../../../../images/category/yamaha.jpg'
import tvs from '../../../../images/category/tvs.jpg'
import hero from '../../../../images/category/hero.jpg'
import keeway from '../../../../images/category/keeway.jpg'
import raner from '../../../../images/category/raner.jpg'
import lifan from '../../../../images/category/lifan.jpg'
import royal from '../../../../images/category/royal.jpg'
import kawasaki from '../../../../images/category/kawasaki.jpg'
import honda from '../../../../images/category/honda.jpg'
import bajaj from '../../../../images/category/bajaj.jpg'
import ktm from '../../../../images/category/ktm.jpg'
import walton from '../../../../images/category/walton.jpg'
import hpower from '../../../../images/category/hpower.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
// =====================Import All Image for Category========================


const categoryData = [
    {
        id: 1,
        title: 'suzuki',
        logo: suzuki,
        cat: 'suzuki'
    },
    {
        id: 2,
        title: 'yamaha',
        logo: yamaha,
        cat: 'yahama'
    },
    {
        id: 3,
        title: 'tvs',
        logo: tvs,
        cat: 'tvs'
    },
    {
        id: 4,
        title: 'hero',
        logo: hero,
        cat: 'hero'
    },
    {
        id: 5,
        title: 'keeway',
        logo: keeway,
        cat: 'keeway'
    },
    {
        id: 6,
        title: 'runner',
        logo: raner,
        cat: 'runner'
    },
    {
        id: 7,
        title: 'lifan',
        logo: lifan,
        cat: 'lifan'
    },
    {
        id: 8,
        title: 'royal',
        logo: royal,
        cat: 'royal'
    },
    {
        id: 9,
        title: 'kawasaki',
        logo: kawasaki,
        cat: 'kewasaki'
    },
    {
        id: 13,
        title: 'h-Power',
        logo: hpower,
        cat: 'hpower'
    },
    {
        id: 11,
        title: 'honda',
        logo: honda,
        cat: 'honda'
    },
    {
        id: 12,
        title: 'bajaj',
        logo: bajaj,
        cat: 'bajaj'
    },
    {
        id: 14,
        title: 'walton',
        logo: walton,
        cat: 'walton'
    },
    {
        id: 15,
        title: 'ktm',
        logo: ktm,
        cat: 'ktm'
    }
]

const Category = () => {
    const [show, setShow] = useState(false);
    return (
        <section className='catagory' style={{ marginTop: '70px' }}>
            <div className='category-sec mb-5'>
                <div className="category-title text-center">
                    <RubberBand>
                        <h5 className='fw-bold mb-2'>Featured Category</h5>
                        <h6>Get Your favorite bike from our Showrooms!</h6>
                    </RubberBand>
                </div>
            </div>
            <div className="cat-cart">
                <div className="row gy-2">
                    {
                        show ?
                            categoryData?.map(category => <CategoryCart category={category} key={category?.id} />)
                            : categoryData?.slice(0, 12).map(category => <CategoryCart category={category} key={category?.id} />)
                    }
                </div>
                <div className="showbtn text-center mt-5">
                    <button className="btn btn-danger fw-bold" onClick={() => setShow(!show)}>See All Brands <FontAwesomeIcon icon={faArrowRightToBracket} className='ms-1' /></button>
                </div>
            </div>
        </section>
    );
};

export default Category;