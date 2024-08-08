import React from 'react'
import Button from '../Button/Button'

function ContactMe() {
  return (
    <div className=' bg-colorbgblue px-24 text-white pb-16'>
        <h1 className='font-semibold text-3xl text-center'> <span className=' text-colorlightblue'>Contact</span> Me</h1>
        
        <div className='mt-16 mx-24 '>
            <form action="" className=' '>
                <div className='grid grid-cols-2 gap-4 '>
                    <input type="text" placeholder='Full Name' className=' p-2 bg-[#394355] outline-none' />
                    <input type="text" placeholder='Email Address' className=' p-2 bg-[#394355] outline-none'/>
                    <input type="text" placeholder='Mobile Number' className=' p-2 bg-[#394355] outline-none'/>
                    <input type="text" placeholder='Email Subject' className=' p-2 bg-[#394355] outline-none'/>
                    <textarea name="" className=' col-span-2 p-2 bg-[#394355] outline-none' id="" cols="30" rows={4} placeholder='Your Message' />
                </div>

                <div className='flex justify-center mt-8'>
                    <Button name="Send Message"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactMe