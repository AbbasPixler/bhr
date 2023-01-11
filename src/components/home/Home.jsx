import React, { useEffect, useState } from "react";
import {AnimatePresence} from 'framer-motion'
// Page Css
import './Home.css';
import { Link } from "react-router-dom";

// slider 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

// images
import NewsImg01 from '../../assets/latest-news-img/news-img01.png';
import DownIcon from '../../assets/icons/select-down-icon.png';
import AboutImg from '../../assets/section-img/about-img.png'

function Home () {
  return (
    <>
        <section id="homePage">
            <div className="homeSlider">
                <div className="wrapper">
                    <AnimatePresence>
                        <h1 className="mainheading">Bounty Hunter</h1>
                    </AnimatePresence>
                    <div className="slider-btnOuter">
                        <Link to={'/'} className="custom-btn-dark">Play Game</Link>
                        <Link to={'/'} className="custom-btn-light">Become A Partner</Link>
                    </div>
                </div>
            </div>
            {/* Lateset News Section */}
            <div className="latestNewsOuter">
                <div className="sliderOuter">
                    <div className="custom-select-dropdown">
                        <select name="" id="">
                            <option value="All">All</option>
                            <option value="All">All</option>
                            <option value="All">All</option>
                            <option value="All">All</option>
                        </select>
                        <img src={DownIcon} />
                    </div>
                    <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={23}
                        modules={[Navigation]}
                        navigation={true}
                        className="mySwiper"
                        autoplay={{
                            reverseDirection: true,
                        }}
                    >
                        <SwiperSlide>
                            <div className="sliderCol">
                                <img src={NewsImg01} />
                                <div className="news-content">
                                    <h3>Digital summertime</h3>
                                    <button className="custom-btn-light read-morebtn">Read</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sliderCol">
                                <img src={NewsImg01} />
                                <div className="news-content">
                                    <h3>Digital summertime</h3>
                                    <button className="custom-btn-light read-morebtn">Read</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sliderCol">
                                <img src={NewsImg01} />
                                <div className="news-content">
                                    <h3>Digital summertime</h3>
                                    <button className="custom-btn-light read-morebtn">Read</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="newsSliderContent">
                    <h2>latest news</h2>
                    <div class="newsContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque velit non sem elementum. Ipsum, laoreet ultrices egestas mi cras sit magna egestas lectus. Phasellus semper aliquet leo, turpis eleifend nunc volutpat. </p>
                        <p>Lobortis eros, turpis platea consequat. Aliquam dignissim amet eget nam. Varius amet, in scelerisque turpis fames parturient pellentesque. Lacus massa dignissim erat nisi curabitur tellus. Netus odio id porttitor tempor risus in vivamus.</p>
                        <Link to={'/'} className="custom-btn-dark view-all-btn">View All</Link>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="aboutSectionOuter">
                <div className="wrapper">
                    <div className="aboutSectionInner">
                        <div className="aboutSectionContent newsSliderContent">
                            <h2>About</h2>
                            <div class="newsContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque velit non sem elementum. Ipsum, laoreet ultrices egestas mi cras sit magna egestas lectus. Phasellus semper aliquet leo, turpis eleifend nunc volutpat. </p>
                                <p>Lobortis eros, turpis platea consequat. Aliquam dignissim amet eget nam. Varius amet, in scelerisque turpis fames parturient pellentesque. Lacus massa dignissim erat nisi curabitur tellus. Netus odio id porttitor tempor risus in vivamus.</p>
                                <div className="downloadsCounterOuter">
                                    <div className="downloadCounterCol">
                                        <label>Download</label>
                                        <div className="countNuber">
                                            <span>1000</span> <span>+</span>
                                        </div>
                                    </div>
                                    <div className="downloadCounterCol">
                                        <label>Credit Coins</label>
                                        <div className="countNuber">
                                            <span>7000</span> <span>+</span>
                                        </div>
                                    </div>
                                    <div className="downloadCounterCol">
                                        <label>Gameplay</label>
                                        <div className="countNuber">
                                            <span>5000</span> <span>+</span>
                                        </div>
                                    </div>
                                    <div className="downloadCounterCol">
                                        <label>Rated</label>
                                        <div className="countNuber">
                                            <span>4/5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sliderCol aboutCol-img">
                            <img src={AboutImg} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )   
}

export default Home;