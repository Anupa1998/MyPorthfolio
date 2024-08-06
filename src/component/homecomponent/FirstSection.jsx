import React from 'react'
import Typewriter from './TypeWriter'
import { TypeAnimation } from 'react-type-animation';
import Button from '../Button/Button';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import img from '../../assets/My.png'

const FirstSection = () => {
  return (
    <div className='px-24 flex lg:h-[93vh] bg-[#1f242d] text-white'>
            <div className='w-1/2 flex items-center'>
                <div>
                    <p> <span className=' font-semibold text-3xl'> Hello I'm </span> <br /> <span className=' font-semibold text-5xl'> Anupa Kavishka Gamage </span>  <br />
                    <span className=' font-semibold text-2xl'>And I'm a </span> 
                    <span className='text-[#0ef] font-semibold text-2xl ms-1'>
                      <TypeAnimation
                          sequence={[
                          ` Web Developer`,
                            1000,
                            "",
                        ]}
                        speed={5}
                        repeat={Infinity}
                      />
                    </span> 
                    <br />
                    </p>  
                    <p className='mt-4 text-lg align-baseline text-justify'>
                      Hi, I'm Anupa, a trainee front-end web developer skilled in HTML, CSS, and JavaScript. I'm passionate about creating user-friendly and responsive websites.
                    </p>

                    <div className=' flex space-x-4 text-3xl mt-4'>
                      <div className=' text-[#0ef] cursor-pointer hover:text-white'>< FaLinkedin /></div>
                      <div className=' text-[#0ef] cursor-pointer'>< FaGithub /></div>
                      <div className=' text-[#0ef] cursor-pointer'>< FaFacebook /></div>
                      
                      
                    </div>

                    <div className='mt-8 flex'>
                      
                      <Button name="Download CV"/>
                    </div>
                </div>
            </div>
            
            <div className='w-1/2  flex justify-center items-center'>
              <img src={img} className='rounded-full max-w-80 bg-[#0ef]  custom-glow' alt="" />
            </div>
    </div>
  )
}

export default FirstSection