import React from 'react'
import python from '../../public/python.jpeg'
import react from '../../public/react.jpeg'
import mongodb from '../../public/mongodb.jpeg'
import nodejs from '../../public/nodejs.jpeg'
import sql from '../../public/sql.jpeg'
import linux from '../../public/linux.jpeg'
import aws from '../../public/aws.jpeg'
import docker from '../../public/docker.jpeg'

function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:python,
            name:"Python"
        },
        {
            id:2,
            logo:react,
            name:"React"
        },
        {
            id:3,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:4,
            logo:nodejs,
            name:"Nodejs"
        },
        {
            id:5,
            logo:sql,
            name:"SQL"
        },
        {
            id:6,
            logo:linux,
            name:"linux"
        },
        {
            id:7,
            logo:aws,
            name:"AWS"
        },
        {
            id:8,
            logo:docker,
            name:"Docker"
        },
    ]
  return (
    <>
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">
        <div>
            <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Featured Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-28 my-5'>
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div className='md:w-[350px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' 
                            alt="" />
                            <div>
                                <div className=' px-2 font-bold tex-xl mb-2'>{name}</div>
                                <p className='px-2 text-grey-700'>Here, we create a Project. You will access my project through the given below buttons.</p>
                            </div>
                            <div className='px-8 py-4 space-x-14 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded justify-around '>
                                    Viedo
                                </button>
                                <button className='bg-green-500 hover:bg-green-500 text-white font-bold px-4 py-2 rounded justify-around'>
                                    Source Code
                                </button>
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

export default Portfolio
