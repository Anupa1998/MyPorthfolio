import React, { useState } from 'react'
import img from '../../assets/Screenshot.png'
import '../ProjectCard/ProjectCardStyles.css'
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard() {
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <div className=' lg:max-w-96 w-96 bg-slate-950 card relative me-8 main'>
        <img src={img} alt="" className=' w-full' />

       

        <div className='sub'>
            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-colorlightblue to-colorbgblue opacity-75 p-8 '>
            </div>

            <div className=' absolute top-8  items-center text-white'>
              <div className=' '>
                  <h1 className=' font-semibold text-center text-xl opacity-100'>Web Design</h1>
                  <p className=' text-center mt-4 text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem quam iure similique? Laborum, </p>

                  <div className=' flex justify-center mt-4 cursor-pointer'>
                    <p className='bg-white w-8 h-8 text-2xl text-colorbgblue rounded-full flex justify-center items-center'><HiOutlineExternalLink/></p> 

                  </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard