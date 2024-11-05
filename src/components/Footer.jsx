import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12
    '>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaTwitter size={24} className='text-2xl cursor-pointer'/>
                    <FaFacebook size={24} className='text-2xl cursor-pointer'/>
                    <FaLinkedin size={24} className='text-2xl cursor-pointer'/>
                    <FaTelegram size={24} className='text-2xl cursor-pointer'/>
                    <FaInstagram size={24} className='text-2xl cursor-pointer'/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className=''>
                        &copy; My Portfolio 2024, Govind Jaiswal
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
