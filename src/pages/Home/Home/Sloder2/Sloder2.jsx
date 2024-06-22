import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Sloder2 = () => {
    return (
        <section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/p4wZw94/laptop-with-blank-black-screen-white-table.jpg" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/p4wZw94/laptop-with-blank-black-screen-white-table.jpg" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/p4wZw94/laptop-with-blank-black-screen-white-table.jpg" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Sloder2;