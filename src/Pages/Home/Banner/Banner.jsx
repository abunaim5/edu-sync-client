import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import BannerItem from './BannerItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    const bannerItems = [
        {
            img: 'https://i.postimg.cc/x83fx8C4/ai-generated-8686344-1920.jpg',
            title: 'Unlock Your Potential with TutorSage',
            description: "Discover personalized tutoring tailored to your learning needs. Whether you're struggling with a subject or aiming for excellence, our expert tutors are here to guide you every step of the way. Join TutorSage today and unleash your full academic potential!",
        },
        {
            img: 'https://i.postimg.cc/x83fx8C4/ai-generated-8686344-1920.jpg',
            title: 'Connect with Top Tutors on TutorSage',
            description: 'Looking for qualified tutors to help you excel academically? Look no further! TutorSage connects you with experienced tutors who are experts in their fields. From math and science to languages and test prep, find the perfect tutor for your learning journey.',
        },
        {
            img: 'https://i.postimg.cc/x83fx8C4/ai-generated-8686344-1920.jpg',
            title: 'Transform Your Learning Experience with TutorSage',
            description: "Experience the difference with TutorSage. Our innovative platform offers flexible scheduling, personalized lessons, and a supportive learning environment. Whether you're a student seeking guidance or a tutor looking to inspire, TutorSage is your pathway to educational success.",
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >
                {
                    bannerItems.map((item, idx) => <SwiperSlide key={idx}><BannerItem item={item} /></SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Banner;