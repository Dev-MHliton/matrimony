import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Background image import 
import BgTestimonials from "../../../assets/BG/Bg-Testimonials.jpg";

// Image import testimonials
import Testimonials_card_01 from "../../../assets/Testimonials/Testimonials-card-01.png";
import Testimonials_card_02 from "../../../assets/Testimonials/Testimonials-card-02.png";
import Testimonials_card_03 from "../../../assets/Testimonials/Testimonials-card-03.png";
import Testimonials_card_04 from "../../../assets/Testimonials/Testimonials-card-04.png";
import Testimonials_card_05 from "../../../assets/Testimonials/Testimonials-card-05.png";


// section title 
import SectionTitle from '../SectionTitle/SectionTitle';

const testimonials = [
    {
        name: "Aisha & Omar",
        quote: "We were searching for a meaningful connection for a long time. This platform helped us find each other and begin a beautiful journey together.",
        image: Testimonials_card_01,
    },
    {
        name: "Sophia & Liam",
        quote: "The process was simple and trustworthy. We connected instantly and now we are planning our future together.",
        image: Testimonials_card_02,
    },
    {
        name: "Fatima & Yusuf",
        quote: "We appreciated the secure and respectful environment. It helped us find the right partner with confidence.",
        image: Testimonials_card_03,
    },
    {
        name: "Maria & Carlos",
        quote: "Even though we lived in different countries, this platform made it possible for us to meet and build a life together.",
        image: Testimonials_card_04,
    },
    {
        name: "Emma & Daniel",
        quote: "We were both serious about marriage and this platform connected us in the most genuine way.",
        image: Testimonials_card_05,
    },
];

const Testimonials = () => {
    return (
        <section>
            <SectionTitle
                heading={"Testimonials"}
            ></SectionTitle>

            <div>
                <Swiper
                    className="mySwiper swiper-h"
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },   //Mobile view
                        640: { slidesPerView: 1, spaceBetween: 20 },  //Tablet view
                        1024: { slidesPerView: 1, spaceBetween: 30 },//Desktop view
                    }}
                >

                    <SwiperSlide>
                        {/* Inner vertical swiper */}
                        <Swiper
                            className="mySwiper2 swiper-v"
                            direction="vertical"
                            spaceBetween={10}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            style={{
                                position: "relative",
                                height: window.innerWidth < 768 ? "200px" : "130px",
                            }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative w-full flex items-center gap-6 rounded-lg shadow-lg overflow-hidden bg-linear-to-br p-4"
                                        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.5), transparent)" }}
                                    >
                                        <img
                                            src={BgTestimonials}
                                            alt="Background"
                                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                                        />

                                        <img src={t.image} alt={t.name} className="h-20 w-20 object-cover rounded-full border-2 border-amber-50 relative z-10" />

                                        <div className="relative z-10 text-left">
                                            <h2 className="text-[#1D3C5B] text-2xl font-bold">{t.name}</h2>
                                            <p className="text-[#DDE8E9] mt-2 text-lg italic">“{t.quote}”</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperSlide>


                    {/* Inline style override for vertical pagination */}
                    <style>
                        {`
                            .swiper-v .swiper-pagination {
                                position: absolute;
                                right: 10px;
                                top: 50%;
                                transform: translateY(-50%);
                                display: flex;
                                flex-direction: column;
                                z-index: 20;
                            }
                            .swiper-v .swiper-pagination-bullet {
                                background: #080808;
                                margin: 6px 0;
                            }
                            .swiper-v .swiper-pagination-bullet-active {
                                background: #135BA2;
                            }
                            `}
                    </style>
                </Swiper>
            </div>
        </section>
    );
}
export default Testimonials;