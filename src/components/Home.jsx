import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import image from '../../public/image.jpeg'

const Home = () => {
  return (
    <>
    {/* Left Div */}
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome to My Portfolio</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello, I'm a</h1>
                {/* <span className='text-orange-700 font-bold'>
                Software Engineer</span> */}
                <ReactTyped
                  className='text-orange-500 font-bold'
                  strings={["Software Engineer", "Software Developer", "Software Tester"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>As a passionate and skilled developer, 
                I thrive on the challenge of translating complex ideas into 
                elegant and efficient code solutions.
                I am a collaborative team player, 
                always eager to learn and contribute to innovative projects. 
                </p>
                <br />
                <div className='flex flex-col items-center md:flex-row justify-between space-y-6'>
                  {/* Social Media icons */}
                <div className='space-y-2'>
                  <h1 className='font-bold'>Available On</h1>
                  <ul className='flex space-x-5'>
                    <li>
                      <a href="https://www.facebook.com/" target='_blank'>
                      <FaFacebook className='text-2xl cursor-pointer'/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target='_blank'>
                      <FaLinkedin className='text-2xl cursor-pointer'/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.telegram.com/" target='_blank'>
                      <FaTelegram className='text-2xl cursor-pointer'/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/" target='_blank'>
                      <FaWhatsapp className='text-2xl cursor-pointer'/>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Skill Icon */}
                <div className='space-y-2'>
                  <h1 className='font-bold '>Currently Working On</h1>
                  <ul className='flex space-x-5'>
                    <li>
                      <SiMongodb className='text-xl md:text-3xl hover:scale-110 
                      duration-200 rounded-full border-[2px]'/>
                    </li>
                    <li>
                      <RiReactjsFill className='text-xl md:text-3xl hover:scale-110 
                      duration-200 rounded-full border-[2px]'/>
                    </li>
                    <li>
                      <SiExpress className='text-xl md:text-3xl hover:scale-110 
                      duration-200 rounded-full border-[2px]'/>
                    </li>
                    <li>
                      <FaNodeJs className='text-xl md:text-3xl hover:scale-110 
                      duration-200 rounded-full border-[2px]'/>
                    </li>
                  </ul>
                </div>
                </div>
            </div>

    {/* Right Div */}
        <div className='md:w-1/2 md:ml-40 md:mt-20 mt-6 order-1'>
          <img src={image} className='rounded-full h-[400px] w-[400px]'
          alt="" />
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Home
