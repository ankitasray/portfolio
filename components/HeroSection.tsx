"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  return (
    <section id='home'>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
        <Image
            //src="/headshot1.png"
            src="/profilepic.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Ankita!</h1>
          <br />
          {/* <p className="text-lg mt-4 mb-6 md:text-2xl"> */}
            {/* <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span> */}
            <span className=" text-lg mt-6 mb-6 md:text-2xl " >
            <p>I&#39;m into{" "}</p>
              <span className='font-semibold text-teal-600'>
              <Typewriter
                options={{
                strings: ['Full-Stack Development!', 'Competitive Coding!', 'Open-Source Contribution!'],
                autoStart: true,
                loop: true,
              }}
              />
              </span>
              <p>I'm working towards creating software that
            makes life easier and more meaningful.</p>
            </span>
            
          {/* </p> */}
          {/* <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
          <br />
            <a
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            href="/Ankita_IT_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >Resume</a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection