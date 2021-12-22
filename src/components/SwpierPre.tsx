import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const requireContext = require.context('../assets/old/DEMO_SEQUENCE', true, /^\.\/.*\.png$/);
const imgList: any[] = requireContext.keys().map(requireContext) as any[];
console.log('🚀 ~ file: App.tsx ~ line 14 ~ imgList', imgList);

export default function SwiperPre({ ref }: { ref?: React.RefObject<HTMLDivElement> }) {
  const [swiperIndex, setSwiperIndex] = useState(3);

  return (
    <div
      ref={ref}
      className="mx-0 w-screen p-12 flex-col max-w-full video-container content-center flex justify-center relative"
    >
      <div className="text-center text-5xl xl:text-6xl mb-12 text-white max-w-6xl justify-self-center my-0 mx-auto font-bold">
        MetaMobile
      </div>
      <div className="w-4/5 sm:w-4/5 xl:w-3/4 swiper-container shadow-2xl">
        <Swiper
          className="shadow-md"
          effect="coverflow"
          grabCursor
          centeredSlides
          preloadImages
          onAfterInit={() => {
            console.log('load!');
          }}
          updateOnImagesReady
          autoplay={{
            delay: 2000,
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 150,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          initialSlide={0}
          slidesPerView="auto"
          loop
          onSlideChange={(e) => {
            console.log('slide change1', e.realIndex);
            setSwiperIndex(e.realIndex);
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
      </div>
    </div>
  );
}
