import Logo from '../assets/LOGO_2_mini的副本.png';
import discord from '../assets/discord.svg';
import twitter from '../assets/twitter.svg';

export default function Footer() {
  return (
    <div className="w-4/5 sm:w-4/5 xl:w-1/2 mx-0 py-12 flex-col max-w-full video-container content-center flex justify-between text-white mt-16">
      <div className="flex my-0 mx-auto sm:w-4/5 xl:w-full w-full text-left mb-16 items-center justify-center">
        <div className="w-full flex flex-col md:w-3/5 justify-center">
          <div className="flex flex-col justify-start">
            <div className="text-pink-600 font-bold text-2xl flex items-center">
              <img src={Logo} className="w-10 mr-4" alt="" />
              <div>MetaMobile</div>
            </div>
            <div className="text-white">9,999 unique MetaMobile running at MetaVerse.</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-2/5 justify-center">
          {/* <div className="flex flex-col text-right">
            <div className="text-right">Home</div>
            <div className="text">Home</div>
            <div className="text">Home</div>
          </div> */}
          <div className="hidden sm:flex flex-row space-x-4 text-right items-end justify-end">
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
          </div>
        </div>
      </div>
      <div className="text-pink-600">©2021 MekaVerse. All rights reserved.</div>
    </div>
  );
}
