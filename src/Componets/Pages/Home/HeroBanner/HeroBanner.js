import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroBanner = () => {
    return (
        <div className="hero-secction" style={{ marginTop: '56px' }}>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/FJ9JgMs/suzuki-new-banner.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/TWStFDD/16029.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/wrRVkSb/365471.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/Vxb7z94/4542254.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/gjb0TN5/4n2ayX.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/FxwZLP1/4544.jpg" alt="slide logo" className="img-fluid w-100" style={{ height: '500px' }} /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default HeroBanner;


