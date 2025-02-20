"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='relative mt-12 overflow-hidden mb-28 lg:pt-12 pt-[80px]'>
      <div className="absolute inset-0 z-0 overflow-hidden ">
        <div className="rounded-full w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-moveX"></div>
        <div className="rounded-full w-72 h-72 bg-gradient-to-r from-pink-500 to-red-500 opacity-20 animate-moveY delay-2000"></div>
        <div className="rounded-full w-72 h-72 bg-gradient-to-r from-green-500 to-teal-500 opacity-20 animate-moveXY delay-4000"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className='mb-4 text-4xl font-extrabold text-white lg:text-6xl sm:text-5xl'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Hello, I'm{"  "} </span>
            <br />
            <TypeAnimation
              sequence={[
                'Dinesh Kumar',
                1000,
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Backend Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl '>
            I'm a Web developer with an extensive will to develop amazing websites comprising both frontend design and backend and much more...
          </p>
          <div className="mt-6">
            <button className='px-6 py-3 mr-4 text-white transition-transform transform rounded-full sm:w-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-700 hover:bg-slate-400 hover:scale-105'>
              <Link href={'#contact'}>Hire Me</Link>
            </button>
            <button className='px-6 py-3 mt-3 text-center text-white transition-transform transform rounded-full sm:w-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-700 hover:bg-slate-400 hover:scale-105 hover:border-t-black'>
              <a
                href="/Resume_Dinesh-internship.pdf"
                download="Dinesh_Resume.pdf"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[150px] h-[100px] lg:w-[300px] lg:h-[300px] relative animate-bounce-slow invisible sm:visible">
            <Image
              src="/images/dp.jpg"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full lg:w-[300px] lg:h-[300px] bg-center '
              alt='heroimage'
              height={250}
              width={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
