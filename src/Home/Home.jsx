import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

const Home = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="/public/Swiper/chuttersnap-fN603qcEA7g-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/public/Swiper/rhys-moult-7eaFIKeo1MQ-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/public/Swiper/seb-creativo-3jG-UM8IZ40-unsplash.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Home;