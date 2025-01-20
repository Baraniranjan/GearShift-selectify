import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import { owl1, owl2, owl3, owl4, owl5, owl6 } from '../assets'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Link } from 'react-router-dom'
import './slide.css'

const Slide = () => {

    return (
        <div className='slider-container'>
        <div className='relative z-1 w-fit mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'
        //className="max-w-2xl mx-auto mb-12 p-4 bg-white rounded-lg shadow-md"
        >
          <h2 className='h3 mb-3'
          //className="text-2xl font-bold text-gray-800 mb-4"
          >Meet my friends : <span className='font-bangers text-color-1'>The SelecTools</span></h2>
          <p className='body-3 max-w-3xl mx-auto mb-0 text-n-2 lg:mb-3'
          //className="text-gray-600 mb-6"
          >
            Selectify's handpicked specialties!
          </p>
        </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide>
                    <Link to="/tools/learn-more">
                        <img className=''
                        src={owl1} alt="burger"
                        //width="520" height="520"
                        />
                        <div className='text-center mt-3 text-4xl'>
                            <h1 className='font-bangers'>Know The Artist</h1>
                            <p className="text-lg text-gray-400">I'll fly around and find out everything about your selection!</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/tools/summarize">
                        <img src={owl2} alt="burger" />
                        <div className='text-center mt-3 text-4xl'>
                            <h1 className='font-bangers'>Summarizer 1.0</h1>
                            <p className="text-lg text-gray-400">Tell me a story & I'll say it back, but briefly!</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/tools/identify-roles">
                        <img src={owl3} alt="burger" />
                        <div className='text-center mt-3 text-4xl'>
                            <h2 className='font-bangers'>Role Radar</h2>
                            <p className="text-lg text-gray-400">Tell me the scene, I'll remember who, why & where youve been!</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/screen-profiles">
                        <img src={owl4} alt="burger" />
                        <div className='text-center mt-3 text-4xl'>
                            <h2 className='font-bangers'>Script Scout</h2>
                            <p className="text-lg text-gray-400">I'll make a crew for you, only if the tale lives upto it too!</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={owl5} alt="burger" 
                    width="360" height="340"/>
                    <div className='text-center mt-3 text-4xl'>
                        <h2 className='font-bangers'>Translator</h2>
                        <p className="text-lg text-gray-400">Tell me what you want, no matter the language.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={owl6} alt="burger" />
                    <div className='text-center mt-3 text-4xl'>
                        <h2 className='font-bangers'>Recommendation Engine</h2>
                        <p className="text-lg text-gray-400">Suggestions curated to your past & current taste</p>
                    </div>
                </SwiperSlide>
                {/*<SwiperSlide>
                    <img src={B07} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B08} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B09} alt="burger" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={B010} alt="burger" />
                </SwiperSlide> */}

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20} />
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slide