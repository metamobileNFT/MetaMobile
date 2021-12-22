/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useViewportScroll, useTransform } from 'framer-motion';
import { useInterval } from 'react-use';
import useScroll, { Easing } from './utils/useScroll';
import { useResizeDetector } from 'react-resize-detector';
import SwpierPre from './components/SwpierPre';
import Footer from './components/Footer';
import VideoImg from './assets/old/HighresScreenshot.png';
import BottomBg from './assets/old/bottom-bg.jpg';
import BottomBg2 from './assets/old/bottom-bg2.jpg';
import discord from './assets/discord.svg';
import twitter from './assets/twitter.svg';
import demo from './assets/old/SEQ_RENDER_VIDEO_2/SEQ_RENDER_VIDEO_2.0085.png';
import Logo from './assets/old/LOGO_2_mini的副本.png';
import BannerMovie from './assets/old/WEB_VIDEO_1 (1).mov';
import MetaMobileGEN from './assets/old/VIDEO_2_211101.mov';
import './App.less';
import 'swiper/swiper.less';

const requireContext = require.context('./assets/old/details', true, /^\.\/.*\.jpeg$/);
const imgList: any[] = requireContext.keys().map(requireContext) as any[];
console.log('🚀 ~ file: App.tsx ~ line 23 ~ imgList', imgList);

const DescSection = () => {
  return (
    <div className="mx-0 video-container content-center flex justify-center text-white my-16 w-full flex-col sm:flex-row">
      <div className="flex justify-center items-center my-0 w-full sm:w-1/2">
        <div className="flex flex-col text-left text-xl">
          <div className="text-white font-bold text-5xl section-title" style={{ lineHeight: 'normal' }}>
            Gallop life in Metaverse
          </div>
          <div className="text-2xl font-semibold py-4"> Welcome to MM Car club.</div>
          <div className="text-2xl font-semibold py-4"> 9,999 unique MetaMobile running at MetaVerse.</div>
          When you purchase MetaMobile NFT, you're not just buying avatars or demonstrably rare works of art. You are
          gaining membership in a club whose benefits and products will increase over time. Your racing car can serve as
          your digital identity.
          <br />
          <br />
          MetaMobile is more than just an NFT art project. We have plans and want to build a MetaMobile ecosystem that
          includes interactivity and utility, community rewards and growth, partnerships with brands, and more! <br />
          <br />
          We want the community to help us decide and determine what features we should focus on next so we want you to
          actively participate in the future of MetaMobile!
          {/* <div className="text-white text-xl my-6 leading-8">
            Do you have a passion for cars and racing?
            <div className="text-2xl font-semibold py-4">MetaMobile is the NFT game for you.</div>
            You can own, modify and drive your favorite cars in this state-of-the-art driving simulation game with the
            most realistic performance. <br />
            <br />
            After you earn money from racing, you can buy upgrades and foundry parts that transform mass-produced
            vehicles into high-performance racing cars.
          </div> */}
        </div>
      </div>
      <div className="flex w-full sm:w-1/2 sm:mt-6">
        <video src={MetaMobileGEN} autoPlay muted loop className=""></video>
      </div>
    </div>
  );
};

const DescSection2 = () => {
  return (
    <div className="mx-0 video-container content-center flex justify-center text-white my-16 w-full">
      <div className="flex justify-center items-center my-0 w-full">
        <div className="flex flex-col text-left">
          <div className="text-white font-bold text-5xl section-title" style={{ lineHeight: 'normal' }}>
            Something Special About MetaMobile
          </div>
          <div className="text-white text-xl my-6 leading-8">
            Each car costs <b>0.33ETH.</b>
            <div className="text-2xl font-semibold py-4">
              Easter egg mechanic: Mint triggers mechanism after more than 5000 units. If there is no user of mint
              within 1 hour, all remaining racers will be destroyed and the last user of mint will be awarded{' '}
              <span className="text-2xl">100ETH</span>.{' '}
            </div>
            <div className="text-2xl font-semibold py-4">MetaMobile is the NFT game for you.</div>
            You can own, modify and drive your favorite cars in this state-of-the-art driving simulation game with the
            most realistic performance. <br />
            <br />
            After you earn money from racing, you can buy upgrades and foundry parts that transform mass-produced
            vehicles into high-performance racing cars.
          </div>
        </div>
        <div className="w-1/2">{/* <img src={demo} alt="" /> */}</div>
      </div>
      {/* <div className="flex w-1/2">
        <video src={MetaMobileGEN} autoPlay muted loop className=""></video>
      </div> */}
    </div>
  );
};

const DescSection3 = () => {
  return (
    <div className="mx-0 video-container content-center flex justify-center text-white my-16 w-full">
      <div className="flex justify-center items-center my-0 w-full">
        <div className="flex flex-col text-left">
          <div className="text-white font-bold text-5xl section-title" style={{ lineHeight: 'normal' }}>
            Roadmap
          </div>
          <div className="text-2xl font-semibold py-4 flex justify-start roadmap-title">
            <span className="text-6xl mr-4" style={{ lineHeight: '2rem' }}>
              ·
            </span>{' '}
            We know a lot of designers in the automotive design world! We wanted to develop a separate collection in
            which each car was created in collaboration with and under the artistic direction of our favorite designers.
            We will create individual pieces for each designer.
          </div>
          <div className="text-2xl font-semibold py-4 flex justify-start roadmap-title">
            <span className="text-6xl mr-4" style={{ lineHeight: '2rem' }}>
              ·
            </span>{' '}
            In the future, we will air drop the drivers from time to time, and you will continue to get new and more
            powerful cars.
          </div>
          <div className="text-2xl font-semibold py-4 flex justify-start roadmap-title">
            <span className="text-6xl mr-4" style={{ lineHeight: '2rem' }}>
              ·
            </span>
            We plan to build a MetaMobile MetaMobile racing game where you can race against players using your favorite
            cars.
          </div>
          <div className="text-2xl font-semibold py-4 flex justify-start roadmap-title">
            <span className="text-6xl mr-4" style={{ lineHeight: '2rem' }}>
              ·
            </span>{' '}
            In the future, we plan to launch modified cars based on existing vehicle designs to improve the appearance
            and performance of MetaMobile, which will include more artistic body painting. We will cooperate with more
            artists and designers in the field of automobile design/fashion to create some unique and creative painting
            designs. We will design a more extreme aerodynamic body components and more powerful engine modification
            kits to challenge the limits of speed, we will bring the new design of car body, even all these new design
            will still keep it simple, direct and pure design style, we hope to become a timeless classic MetaMobile
            instead of complex design combination. All this is proceeding in an orderly way.
          </div>
          {/* <div className="text-2xl font-semibold py-4 flex items-center roadmap-title">
            <span className="text-6xl mr-4">·</span>First Community ETH Raffle: <br /> Once we sell out 50% of
            MetaMobile, we'll have an exclusive community raffle to win some Ethereum!
          </div>
          <div className="text-2xl font-semibold py-4 flex items-center roadmap-title">
            <span className="text-6xl mr-4">·</span>Second Community ETH Raffle: <br /> Once we sell out 100% of
            MetaMobile, we'll have an exclusive community raffle to win some Ethereum!
          </div> */}
          <div className="text-2xl font-semibold py-4 flex justify-start roadmap-title">
            <span className="text-6xl mr-4" style={{ lineHeight: '2rem' }}>
              ·
            </span>{' '}
            We will be responsible for maintaining MetaMobile. We both come from the design industry and we are
            passionate about art, short films, physics and digital exploration and we want to explore more and hopefully
            always make the event more impressive and ambitious. We look forward to your support! We look forward to
            seeing what happens in the future!
          </div>
          <div className="text-2xl font-semibold py-4">Join our Discord community and follow on Twitter.</div>
          <div className="flex">
            <a href="https://discord.gg/rKwRttZQNK" target="_blank" rel="noreferrer">
              <div className="mr-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border p-2 w-10 h-10 flex justify-center items-center">
                <img src={discord} className="text-white" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/meta_mobile" target="_blank" rel="noreferrer">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border p-2 w-10 h-10 flex justify-center items-center">
                <img src={twitter} className="text-white" alt="" />
              </div>{' '}
            </a>
          </div>
        </div>
        <div className="w-1/2">{/* <img src={demo} alt="" /> */}</div>
      </div>
      {/* <div className="flex w-1/2">
        <video src={MetaMobileGEN} autoPlay muted loop className=""></video>
      </div> */}
    </div>
  );
};

function App() {
  const scrollVideo = useRef(null);
  const bannerVideo = useRef<HTMLDivElement>(null);
  const metaMobileVideo = useRef<HTMLVideoElement>(null);
  // console.log('🚀 ~ file: App.tsx ~ line 36 ~ App ~ scrollVideo', scrollVideo);

  const { scrollYProgress, scrollY } = useViewportScroll();
  const progress = useScroll({ start: 0.21136836628511968 });

  const videoTransform = useMotionValue(0);
  const [videoTransformY, setVideoTransformY] = useState(0);
  const [videoFix00000000ed, setVideoFixed] = useState(false);

  const [videoStartY, setVideoStartY] = useState(0);
  const [videoFixedLeft, setVideoFixedLeft] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const onResize = useCallback((w, h) => {
    // on resize logic
    // if (bannerVideo.current) {
    //   console.log(
    //     '🚀 ~ file: App.tsx ~ line 56 ~ onResize ~ bannerVideo.current.offsetHeight',
    //     bannerVideo.current.offsetHeight,
    //   );
    //   setVideoStartY(bannerVideo.current.offsetHeight + 28);
    // }
    if (metaMobileVideo.current) {
      setVideoFixedLeft(metaMobileVideo.current.offsetLeft);
    }
    setBodyHeight(h);
    console.log('🚀 ~ file: App.tsx ~ line 52 ~ onResize ~ e', w, h);
  }, []);

  useEffect(() => {
    console.log(
      '🚀 ~ file: App.tsx ~ line 56 ~ onResize ~ bannerVideo.current.offsetHeight',
      // bannerVideo.current?.getBoundingClientRect().top! + document.documentElement.scrollTop,
      bannerVideo.current?.offsetTop!,
      bannerVideo.current?.offsetHeight!,
    );
    // if (bannerVideo.current) {
    //   // setVideoStartY(bannerVideo.current.getBoundingClientRect().top + document.documentElement.scrollTop);
    //   setVideoStartY(bannerVideo.current.offsetTop + bannerVideo.current.offsetHeight);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerVideo.current]);

  const { width, height, ref: resizeRef } = useResizeDetector({ onResize });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // useEffect(() => {
  //   console.log('🚀 ~ file: App.tsx ~ line 39 ~ App ~ scrollY', progress);
  // }, 】[progress]);

  // useInterval(() => {
  //   const total = 1 - progress;
  //   metaMobileVideo.current!.currentTime = Easing.linear(3 * (1 - total));
  // }, 10);

  // u15se1Effect(
  //   () =>
  //     scrollY.onChange((latest) => {
  //       if (bannerVideo.current) {
  //         // setVideoStartY(bannerVideo.current.getBoundingClientRect().top + document.documentElement.scrollTop);
  //         setVideoStartY(1bannerVideo.current.offsetTop + bannerVideo.current.offsetHeight);
  //       }
  //       console.log('🚀 ~ file: App.tsx ~ line 59 ~ scrollY.onChange ~ latest', latest, videoStartY);
  //       // videoTransform.set(latest < videoStartY ? 0 : latest - videoStartY);
  //       // setVideoTransformY(latest < videoStartY ? 0 : latest - videoStartY);
  //       setVideoFixed(latest >= videoStartY);
  //       const time = latest < videoStartY ? 0 : 3 * ((latest - videoStartY) / (bodyHeight - videoStartY));
  //       console.log('🚀 ~ file: App.tsx ~ line 85 ~ scrollY.onChange ~ time', time);
  //       metaMobileVideo.current!.currentTime = time === Infinity || isNaN(time) ? 0 : time;
  //       // metaMobileVideo.current!.currentTime = Easing.linear(3 * (1 - (height!-/)))
  //       // setVideTransfrom(progress < 1600 ? 0 : progress - 1600);
  //     }),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [videoStartY],
  // );

  // useEffect(() => {
  //   console.log(metaMobileVideo.current!.currentTime);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [metaMobileVideo.current?.currentTime]);

  const [show, setshow] = useState(false);

  return (
    <div className="App bg-black flex flex-col justify-center items-center">
      <nav className="w-full 2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-6 px-5">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between items-center w-full">
          <div className="hidden sm:flex flex-row items-center md:space-x-6 sm:space-x-4 w-1/4">
            {/* <div className="text-white text-5xl font-extrabold logo-title">MetaMobile</div> */}
            {/* <button className="text-white btn btn-ghost btn-sm rounded-none">Learn</button>
            <button className="text-white btn btn-ghost btn-sm rounded-none">Rarity</button> */}
            <button className="flex space-x-2 w-48 h-10 font-normal text-sm leading-3 text-white bg-transparent border border-white focus:outline-none hover:bg-white hover:text-black duration-100 justify-center items-center">
              COMING SOON
            </button>
            {/* <button className="text-white btn btn-ghost btn-sm rounded-none">Roadmap</button> */}
          </div>
          <div
            className="w-1/6 flex space-x-3 items-center justify-self-center self-center justify-items-center sm:w-1/5"
            style={{ maxWidth: '160px' }}
          >
            <img src={Logo} className="w-full" alt="" />
          </div>
          <div className="hidden sm:flex flex-row space-x-4 w-1/4 justify-end">
            <a href="https://discord.gg/rKwRttZQNK" target="_blank" rel="noreferrer">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border p-2 w-10 h-10 flex justify-center items-center">
                <img src={discord} className="text-white" alt="" />
              </div>
            </a>
            <a href="https://twitter.com/meta_mobile" target="_blank" rel="noreferrer">
              <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border p-2 w-10 h-10 flex justify-center items-center">
                <img src={twitter} className="text-white" alt="" />
              </div>{' '}
            </a>
            {/* <button className="flex space-x-2 w-48 h-10 font-normal text-sm leading-3 text-white bg-transparent border border-white focus:outline-none hover:bg-white hover:text-black duration-100 justify-center items-center">
              COMING SOON
            </button> */}
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? 'hidden' : ''}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? 'block' : 'hidden'}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
          <div className="flex flex-row items-center justify-center space-x-6">
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6 9H2V21H6V9Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M17.5 6.5H17.51" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
              Sign Up
            </button>
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
              Sign In
            </button>
          </div>
        </div>
      </nav>
      <div className="mx-0 w-screen p-0 max-w-full video-container content-center flex justify-center relative">
        {/* <img src={VideoImg} alt="" width="100%" className="w-full filter brightness-90 pointer-events-none" /> */}
        <video src={BannerMovie} width="100%" autoPlay muted loop></video>
        <button className="bg-black absolute py-4 px-8 xl:py-4 xl:px-8 text-white bottom-8 text-sm uppercase sm:py-2 sm:px-4">
          Stay tuned
        </button>
      </div>
      <div ref={bannerVideo}>
        <SwpierPre />
      </div>
      <div className="text mx-0 my-auto w-4/5 sm:w-4/5 xl:w-3/4 flex justify-center items-center flex-col">
        <DescSection />
        <DescSection2 />
        <div className="w-full grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
          {imgList.map((img) => {
            return <img src={img.default} alt="" />;
          })}
        </div>
        <DescSection3 />
      </div>
      <img src={BottomBg2} className="my-6" width="100%" alt="" />
      {/* <motion.div
        className="scroll flex mx-0 w-screen p-0 justify-start items-start"
        style={{ maxWidth: '100vw', marginTop: '5px' }}
      >
        <div ref={scrollVideo} className="w-1/2 flex flex-col items-end">
          <DescSection />
          <DescSection />
        </div>
        <motion.video
          src={MetaMobileGEN}
          ref={metaMobileVideo}
          // className="w-288"
          className="w-288 top-20 right-6 scroll-video"
          // style={{ maxWidth: '30vw', transform: `translateY(${videoTransformY}px)` }}
          style={{ maxWidth: '30vw', left: videoFixedLeft, top: 0, position: `${videoFixed ? 'fixed' : 'inherit'}` }}
        ></motion.video>
      </motion.div> */}
      <Footer />
    </div>
  );
}

export default App;
