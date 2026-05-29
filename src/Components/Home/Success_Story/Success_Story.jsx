// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';




//Slide import image
import couple_success_story_card_01 from '../../../assets/Success-story/couple-success-story-card-01.png';
import couple_success_story_card_02 from '../../../assets/Success-story/couple-success-story-card-02.jpg';
import couple_success_story_card_03 from '../../../assets/Success-story/couple-success-story-card-03.png';
import couple_success_story_card_04 from '../../../assets/Success-story/couple-success-story-card-04.jpg';
import couple_success_story_card_05 from '../../../assets/Success-story/couple-success-story-card-05.jpg';
import couple_success_story_card_06 from '../../../assets/Success-story/couple-success-story-card-06.jpg';
import couple_success_story_card_07 from '../../../assets/Success-story/couple-success-story-card-07.jpg';



import SectionTitle from '../SectionTitle/SectionTitle';



const Success_Story = () => {



    const stories = [
        "Oliver and Emily from England met through our platform and built a bond on trust and understanding.",
        "Arjun and Priya from India remind us that meaningful connections happen when hearts are open.",
        "Rashed and Fatema from Bangladesh got to know each other for months and found their perfect match.",
        "Ethan and Sophia from USA highlight the beauty of commitment and communication.",
        "Ayaan and Ananya from India found love that transcends distance and differences.",
        "Rahman and Mariam from Bangladesh blossomed from a shared vision for the future.",
        "William and Charlotte from England exemplify trust, understanding, and love."
    ];

    const couple_success_story_cards = [couple_success_story_card_01, couple_success_story_card_02, couple_success_story_card_03, couple_success_story_card_04, couple_success_story_card_05, couple_success_story_card_06, couple_success_story_card_07];

    return (
        <div id='success_story'>


            <SectionTitle
                heading={"Success-Story"}
            ></SectionTitle>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper py-10"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },   //Mobile view
                    640: { slidesPerView: 2, spaceBetween: 20 },  //Tablet view
                    1024: { slidesPerView: 3, spaceBetween: 30 },//Desktop view
                }}
            >
                {couple_success_story_cards.map((couple_success_story_card, index) => (
                    // slide.map -> slide on mapping
                    // slide -> current slide
                    // index -> position (0....6)


                    // key={index} means unique id index position 1...7
                    <SwiperSlide key={index} className="flex">

                        {/* This is card  */}
                        <div className="card bg-base-100 shadow-md hover:shadow-2xl 
                        transition-all duration-300 
                        hover:-translate-y-2 
                        rounded-2xl 
                        flex flex-col w-full h-full">

                            <figure className="px-5 pt-5 object-cover">
                                <img
                                    src={couple_success_story_card}     // current slide image
                                    alt={`Slide ${index + 1}`}    // index + 1 means slide number (1....7)
                                    className="rounded-xl w-full h-64 md:h-72 lg:h-80 object-cover"
                                />
                            </figure>

                            <div className="card-body items-center text-center flex flex-col grow justify-between">

                                {/* per story position 0....6 */}
                                <p className="min-h-22.5">
                                    {stories[index]}   {/* index position on story showing */}
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Success_Story;