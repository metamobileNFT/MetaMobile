/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef, useCallback } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
import { motion, useMotionValue, useViewportScroll, useTransform } from 'framer-motion';
import { useInterval } from 'react-use';
import useScroll, { Easing } from './utils/useScroll';
import { useResizeDetector } from 'react-resize-detector';
import SwpierPre from './components/SwpierPre';
import Footer from './components/Footer';
import airbase from './assets/airbase.jpg';
import STILL_NFT_SALTFLAT_0106 from './assets/STILL_NFT_SALTFLAT_0106.jpg';
import STILL_NFT_SALTFLAT_0105 from './assets/STILL_NFT_SALTFLAT_0105.jpg';
import STILL_NFT_SALTFLAT_0108 from './assets/STILL_NFT_SALTFLAT_0108.jpg';
import SEQ_RENDER_TWITTER from './assets/SEQ_RENDER_TWITTER.0010.png';
import WEB_VIDEO_01 from './assets/WEB_VIDEO_01.mov';
import WEB_VIDEO_02 from './assets/WEB_VIDEO_02.mov';
import LOOP_ENGINE from './assets/LOOP_VIDEO/LOOP_ENGINE.mov';
import LOOP_FRAME from './assets/LOOP_VIDEO/LOOP_FRAME.mov';
import LOOP_NOSE from './assets/LOOP_VIDEO/LOOP_NOSE.mov';
import LOOP_SEAT from './assets/LOOP_VIDEO/LOOP_SEAT.mov';
import LOOP_SPOILER from './assets/LOOP_VIDEO/LOOP_SPOILER.mov';
import LOOP_WHEEL from './assets/LOOP_VIDEO/LOOP_WHEEL.mov';
import LOGO4_2 from './assets/LOGO4_2.png';
import THEME_HD from './assets/THEME_HD.mov';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import Nav from './components/Nav';
import './App.less';
import 'swiper/swiper.less';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

// const requireContext = require.context('./assets/metamobile-demo', true, /^\.\/.*\.jpeg$/);
// const imgList: any[] = requireContext.keys().map(requireContext) as any[];
// console.log('🚀 ~ file: App.tsx ~ line 20 ~ imgList', imgList);
// const requireContext = require.context('./assets/details', true, /^\.\/.*\.jpeg$/);
// const imgList: any[] = requireContext.keys().map(requireContext) as any[];
// console.log('🚀 ~ file: App.tsx ~ line 23 ~ imgList', imgList);

function App() {
  const [show, setshow] = useState(false);

  return (
    <div
      className="App bg-black flex flex-col justify-center items-center"
      style={{
        color: '#D7620E',
        fontFamily: 'Gill Sans',
      }}
    >
      <Nav></Nav>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="w-screen absolute left-0 h-screen top-0">
          <video
            src={THEME_HD}
            width="100%"
            style={{ width: '100%' }}
            className="object-fill"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          {/* <div className="text-8xl text-white uppercase">MetaMobile</div> */}
          {/* <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div> */}
          {/* <div className="text-4xl justify-start text-left self-start">Something Special about MetaMobile #01</div> */}
          {/* <div className="flex w-full flex-row justify-between flex-wrap mt-20">
            {[LOOP_ENGINE, LOOP_FRAME, LOOP_NOSE, LOOP_SEAT, LOOP_SPOILER, LOOP_WHEEL].map((video) => {
              return (
                <div className="video-item" style={{ width: '30%' }}>
                  <video
                    src={video}
                    width="100%"
                    style={{ width: '100%' }}
                    className="object-none w-full"
                    loop
                    autoPlay
                    muted
                  ></video>
                  ;
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center">
        <div
          className="top flex w-full justify-center"
          style={{
            height: 'calc(100vw / 2.666666667)',
          }}
        >
          <img src={airbase} className="absolute w-full z-10" alt="" />
          <div
            className="flex flex-col z-20 justify-start text-left w-4/5 self-end font-semibold
          "
          >
            <div className="text-8xl">Welcome to</div>
            <div className="text-8xl">MetaMobile club.</div>
          </div>
        </div>
        <div className="bottom flex justify-center flex-col items-center w-4/5 z-20 mt-9">
          <div className="text-4xl justify-start text-left self-start">Gallop Life in Metaverse.</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-white text-2xl text-left mt-9">
            MetaMobile will be your fastest drive in the Metaverse and will realize all your fantasies about speed,
            whether you are racing in our Metaverse game or just simply collected it as a piece of art work. With the
            powerful V8 engine in the rear and the shark-like aerodynamic shape, each MetaMobile has both the simplicity
            & elegance of retro classic race cars and the most direct & brutal driving dynamic features. Everything is
            designed for speed, the MetaMobiles are born for race tracks, but with modifications they will run through
            even jungles and deserts. They are speeding along the Nürburgring, they will conquer the Le Mans, they can
            roll up the dust that block the sun in Dakar, they shall challenge the speed record at Bonneville salt
            flats.
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        {/* <div className="w-screen absolute left-0 h-screen top-0">
          <Swiper
            // effect="coverflow"
            grabCursor
            centeredSlides
            preloadImages
            onAfterInit={() => {
              console.log('load!');
            }}
            updateOnImagesReady
            autoplay={
              {
                // delay: 2000,
              }
            }
            // coverflowEffect={{
            //   rotate: 10,
            //   stretch: 150,
            //   depth: 250,
            //   modifier: 1,
            //   slideShadows: false,
            // }}
            initialSlide={0}
            slidesPerView="auto"
            loop
            onSlideChange={(e) => {
              console.log('slide change1', e.realIndex);
              // setSwiperIndex(e.realIndex);
            }}
            onSwiper={(swiper) => console.log(swiper)}
            slideActiveClass="scale-img"
          >
            {imgList.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={`swiper-img-display`}>
                    <img src={img.default} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">MetaMobile #01</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">Gallop Life in Metaverse.</div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-10 z-20">
          <div className="text-8xl">MetaMobile #01</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">The First Ever MetaMobile Is Here Now.</div>
          <div className="flex my-5 h-1/3">
            <img src={STILL_NFT_SALTFLAT_0106} height="100%" className="w-1/2" alt="" />
            <img src={STILL_NFT_SALTFLAT_0105} height="100%" className="w-1/2" alt="" />
          </div>
          <div className="text-white text-2xl text-left">
            We have created MetaMobile #01. The first category we do is to pay our respect to those 1960’s racing
            legends, Formula 1, the purest and most beautiful machinery that mankind has ever created. They were born
            with one and only purpose. Speed. People have devoted countless time to the sport, tears were shed and even
            lives were sacrificed to it. All the greatest cars were born in the 1960s, as well as the greatest drivers.
            Pay tribute to those legends, Sir Stirling Moss, Jackie Stewart, Graham Hill, Jim Clark, Colin Chapman, Jack
            Brabham, Jochen Rindt, Phil hill... The list goes on and on, too many pioneers challenged the limit and
            brought us so many treasures of memories. With all the passion and love we have for those legendary race
            cars, to re-imagine that magnificent period of time, now you have the opportunity to drive a Formula 1 race
            car that has no ABS nor any fancy electric devices, nothing but just a pure driving machine, only your
            courage and the sound of over 200 km per hour wind roaring by your ears.
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">Our Story.</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">Our Team & Vision.</div>
          <div className="flex justify-between my-20">
            {[
              'Automotive Style Designers',
              'UnrealEngine Unity3D Engineers',
              'Blockchain Specialists',
              'Marketing Finance Consultants',
            ].map((item) => {
              return (
                <div className="item flex flex-col justify-between w-1/5">
                  <div className="title text-white text-4xl">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">Roadmap.</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">Our Roadmap.</div>
          <div className="flex justify-between my-20">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((item) => {
              return (
                <div className="item flex flex-col justify-between w-1/5">
                  <div
                    className="title text-white text-4xl rounded-full"
                    style={{
                      background: '#d7620e',
                    }}
                  >
                    {item}
                  </div>
                  <div className="text-white text-4xl mt-16">
                    Roadmap content. Roadmap content. Roadmap content. Roadmap content.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="w-screen absolute left-0 h-screen top-0">
          <video
            src={WEB_VIDEO_01}
            width="100%"
            style={{ width: '100%' }}
            className="object-fill"
            autoPlay
            muted
          ></video>
        </div>
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">MetaMobile #01</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">The First Ever MetaMobile Is Here Now.</div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="w-screen absolute left-0 h-screen top-0">
          <img
            src={SEQ_RENDER_TWITTER}
            // className="object-fill"
            alt=""
          ></img>
        </div>
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">MetaMobile #01</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">The First Ever MetaMobile Is Here Now.</div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div className="w-screen absolute left-0 h-screen top-0">
          <video
            src={WEB_VIDEO_02}
            width="100%"
            style={{ width: '100%' }}
            className="object-fill"
            autoPlay
            muted
          ></video>
        </div>
        <div className="wrapper w-4/5 font-semibold flex justify-start flex-col text-left mt-20 z-20">
          <div className="text-8xl">MetaMobile #01</div>
          <div
            className="w-full h-1 my-9"
            style={{
              background: '#D7620E',
            }}
          ></div>
          <div className="text-4xl justify-start text-left self-start">Something Special about MetaMobile #01</div>
          <div className="flex w-full flex-row justify-between flex-wrap mt-20">
            {[LOOP_ENGINE, LOOP_FRAME, LOOP_NOSE, LOOP_SEAT, LOOP_SPOILER, LOOP_WHEEL].map((video) => {
              return (
                <div className="video-item" style={{ width: '30%' }}>
                  <video
                    src={video}
                    width="100%"
                    style={{ width: '100%' }}
                    className="object-none w-full"
                    loop
                    autoPlay
                    muted
                  ></video>
                  ;
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center relative">
        <div
          className="top flex w-full justify-center relative"
          style={
            {
              // height: 'calc(100vw / 2.666666667)',
            }
          }
        >
          <img src={STILL_NFT_SALTFLAT_0108} className="absolute w-full z-10" alt="" />
        </div>
        <div className="bottom flex justify-between flex-col items-center w-4/5 z-20 h-screen mt-28 mb-6">
          <div
            className="flex flex-col z-20 justify-between text-left w-full self-end font-semibold  mt-30
          "
          >
            <div>
              <div className="text-8xl">Stay Tuned</div>
              <div
                className="w-full h-1 my-9"
                style={{
                  background: '#D7620E',
                }}
              ></div>
              <div className="text-4xl justify-start text-left self-start">More Coming...</div>
            </div>
          </div>
          <div className="text-2xl flex flex-col justify-center items-center font-light mt-10">
            <img src={LOGO4_2} width="10%" className="-mb-1" alt="" />
            <div className="text-white mb-5">Future Mobility running on Metaverse.</div>
            <div className="text-white">© 2022 MetaMobile. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
