import React, { useState } from 'react'
import image from '../../public/image.jpeg'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
    const[menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact Us"
        },
    ]
  return (
    <>
    <div className='mx-auto px-4 w-auto md-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16 w-auto'>
            <div className='flex space-x-2'>
                <img className="h-12 w-12 rounded-full" 
                src={image} alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                <span className='text-orange-500 text-2xl'>G</span>ovind 
                <span className='text-orange-500 text-2xl'>J</span>aiswal
                <p className='text-sm'>Software Engineer</p>
                </h1>
            </div>

            {/* Foe Desktop Navber */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItems.map(({id, text}) =>(
                        <li className='hover:scale-125 duration-200 cursor-pointer' 
                        key={id}
                        >
                            <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'                        
                             >{text}
                            </Link>
                        </li>
                        ))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                {menu?<IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}</div>
            </div>
        </div>

        {/* For Mobile Navbar */}
        {
            menu && (
                <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen 
            items-center justify-center space-y-2'>
                {
                    navItems.map(({id, text}) =>(
                    <li className='hover:scale-125 duration-200 cursor-pointer text-xl' 
                    key={id}
                    >
                        <Link
                            onClick={()=>setMenu(!menu)} 
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'                        
                        >{text}
                        </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
            )
        }
    </div>
    </>
  )
}

export default Navbar
