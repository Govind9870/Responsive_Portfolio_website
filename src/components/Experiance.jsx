import React from 'react';
import html from '../../public/html.jpeg';
import tailwindcss from '../../public/tailwindcss.jpeg';
import js from '../../public/js.jpeg';
import oracle from '../../public/oracle.jpeg';
import python from '../../public/python.jpeg';
import react from '../../public/react.jpeg';
import linux from '../../public/linux.jpeg';
import aws from '../../public/aws.jpeg';
import docker from '../../public/docker.jpeg';

function Experiance() {
    const cardItem = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:tailwindcss,
            name:"Tailwind CSS"
        },
        {
            id:3,
            logo:js,
            name:"Java Script"
        },
        {
            id:4,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:5,
            logo:python,
            name:"Python"
        },
        {
            id:6,
            logo:react,
            name:"React Js"
        },
        {
            id:7,
            logo:linux,
            name:"linux"
        },
        {
            id:8,
            logo:aws,
            name:"AWS"
        },
        {
            id:9,
            logo:docker,
            name:"Docker"
        },
    ]
  return (
    <>
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <p className='font-semibold'>
                I have Some Experiance in these technologies past 2 years 
            </p>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-7 my-3'>
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'
                             key={id}>
                            <img src={logo} className='w-[150px] rounded-full' 
                            alt="" />
                            <div>
                                <div className=''>{name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Experiance
