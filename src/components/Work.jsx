import React from "react";

import UW from "../assets/uw-screen-shot.png";

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full bg-[#3e3e1f] py-[3rem]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-[#ede7dd] text-4xl font-bold inline border-b-4 border-[#8a3918] border-600 '>
            Work
          </p>
          <p className='py-4 text-[#ede7dd]'>
            Check out some of my recent work
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{
              backgroundImage: `url(${UW})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-[#FFEE00]'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                UW GitHub Finder
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://uwaterloo-github-finder.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/youngjun827/uwaterloo-github-finder'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
