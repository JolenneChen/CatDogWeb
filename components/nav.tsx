import React from 'react'

const Nav = () => {
  return (
    <div className='sticky w-full h-25 top-0 left-0 right-0 bg-[#dadada]'>
        <div className="justify-between flex flex-row  items-center p-4">
            <div className="text-left text-black font-bold text-2xl">CatDogWeb</div>
            
            <div className="gap-5 flex flex-row">
                <a href="/Cats" className=" bg-[#969db4] rounded-2xl hover:underline p-4">
                    Cats Images
                </a>
                <a href="/Dogs" className=" bg-[#969db4] rounded-2xl hover:underline p-4">
                    Dog Images
                </a>
            </div>
        </div>
    </div>
  )
}

export default Nav