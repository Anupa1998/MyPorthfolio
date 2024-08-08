import React from 'react'

const list = [
    {
        name:"Home",
    },
    {
        name:"About",
    },
    {
        name:"Services",
    },
    {
        name:"Portfolio",
    },
    {
        name:"Contact",
    },
]


function NavBar() {
  return (
    <div className='fixed w-full z-50 px-24 flex justify-between bg-[#18191A] py-4 text-white'>
        <div className=' font-semibold text-xl cursor-pointer'> <span className=' text-[#0ef]'> Anupa </span>Kavishka Gamage</div>
        <div>
            <ul className=' flex space-x-8 cursor-pointer'>
                {
                    list.map((ele,index) =>(
                        <li className=' font-semibold'>{ele.name}</li>
                    ))
                }
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar