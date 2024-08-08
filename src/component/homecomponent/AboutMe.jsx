import React from 'react'
import ImgComponent from './ImgComponent'
import Button from '../Button/Button'

function AboutMe() {
  return (
    <div className=' bg-colorbgblue p-24'>
        <div className=' flex space-x-24 text-white'>
            <div className='w-auto  flex justify-start items-center '>
                <ImgComponent/>
            </div>

            <div className=' w-full flex '>
                <div>
                    <p className='font-semibold text-4xl '>About <span className=' text-colorlightblue'>Me</span> </p> 
                    <p className=' font-semibold text-xl'>Front-End Web Developer</p>
                    <p className='mt-4 text-lg font-medium'>Hi, I'm Anupa Gamage, a dedicated and enthusiastic trainee front-end developer. With a strong foundation in HTML, CSS, and JavaScript, I'm on a continuous journey to enhance my skills and build visually appealing, user-friendly web applications. I am passionate about web development and enjoy creating seamless user experiences.</p>

                    <div className='mt-4'>
                        <Button  name="Read More"/>
                    </div>
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default AboutMe