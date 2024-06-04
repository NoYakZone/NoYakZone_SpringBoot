import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useHistory } from 'react-router-dom';
import ChatBot from './ChatBot';
import '../CSS/MainPage.css';

import poster1 from '../image/마약포스터1.jpg';
import poster2 from '../image/마약포스터2.png';

const MainPage = () => {
    const history = useHistory();

    const goToAboutPage = () => {
        history.push('/About');
    };

    const goToDrugInfo = () => {
        history.push('/Community');
    };

    const goToChatBot = () => {
        history.push('/ChatBot');
    };


    return (
        <div className='MainContainer'>
            <ChatBot />
            <div className='Content'>
                <div className='ServiceInfo'>
                    <h2>서비스 소개</h2>
                    <p className='serviceGoal'>
                        슬라이드로 서비스 목표 쓰고 설명.
                    </p>
                    <p className='autoPlay'>
                        AutoPlay도 가능하면 쓸수있게
                    </p>

                    <Swiper 
                        navigation={true} 
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]} 
                        className="mySwiper"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        <SwiperSlide>
                            <div className="con">
                                <div className="txtwrap">
                                    <h3>Making Tomorrow Better</h3>
                                    <p>저희 NoYakZone은 마약이 없는 대한민국을 꿈꾸고 있습니다.</p>
                                </div>
                                <div className="ctr">
                                    <div className="vprev" tabIndex="0" role="button" aria-label="Previous slide"></div>
                                    <div className="swiper-pagination vpaging swiper-pagination-clickable swiper-pagination-bullets"></div>
                                    <div className="vnext" tabIndex="0" role="button" aria-label="Next slide"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={poster1} alt="Poster 1" /></SwiperSlide>
                        <SwiperSlide><img src={poster2} alt="Poster 2" /></SwiperSlide>
                    </Swiper>
                </div>

                <div className='GoAboutUsPage' onClick={goToAboutPage}>
                    <h2>약 소개 페이지</h2>
                </div>

                <div className='DrugInfo'>
                    <Swiper 
                        navigation={true} 
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]} 
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>

                <div className='Community' onClick={goToDrugInfo}>
                    <h2>커뮤니티</h2>
                </div>

                <div className='ChatBot' onClick={goToChatBot}>
                    <p>상담 챗봇 페이지</p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
