import React from 'react';
import "./ScreenShotsContainer.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ScreenShotsContainer({screenShots, screenShotsCount}) {
    return (
        <div className="screenShotsContainer" style={{display: screenShotsCount <= 0 && "none"}}>
             <h2>Screenshots</h2>
            <div className="carousel">
                    <Swiper id="swiper"
                            modules={[Navigation, Pagination, A11y]}
                            slidesPerView={1}
                            spaceBetween={50}
                            navigation
                            pagination={{ clickable: true }}
                    >
                        {screenShots?.map(shot => (
                            <SwiperSlide key={shot.id}><img className="carouselImg" src={shot.image} /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </div>
    );
}

export default ScreenShotsContainer;