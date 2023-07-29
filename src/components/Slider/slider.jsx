import { EastOutlined, WestOutlined } from '@mui/icons-material';
import React, { useState } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.igdb.com/igdb/image/upload/t_original/ar4ct.jpg",
        "https://res.cloudinary.com/cook-becker/image/fetch/q_auto:eco,f_auto,w_1920,e_sharpen/https://candb.com/site/candb/images/artwork/Rift-Apart-Ratchet-Clank_Insomniac-Games.jpg",
        "https://images.igdb.com/igdb/image/upload/t_original/ar1qhx.jpg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }

  return (
    <div className='w-[100vw] h-[calc(100vh-80px)] relative overflow-hidden'>
        <div className='flex w-[300vw] h-[100%] transition-all duration-1000 ease-in-out ' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img className='w-[100vw] h-[100%] object-cover' style={{objectPosition:"75% 25%"}} src={data[0]} alt="Red Dead Redemption 2" />
            <img className='w-[100vw] h-[100%] object-cover' src={data[1]} alt="Ratchet & Clank: Uma dimensão à parte" />
            <img className='w-[100vw] h-[100%] object-cover' style={{objectPosition:"65% 15%"}} src={data[2]} alt="EA SPORTS™ FIFA 23" />
        </div>
        <div className='flex gap-x-8 w-fit absolute left-0 right-0 m-auto bottom-[40px] sm:bottom-[100px]'>
            <div onClick={prevSlide} className='flex items-center justify-center w-[50px] h-[50px] border-[1px] border-gray-200 cursor-pointer bg-white/40 hover:bg-white/80 hover:text-gray-800'><WestOutlined /></div>
            <div onClick={nextSlide} className='flex items-center justify-center w-[50px] h-[50px] border-[1px] border-gray-200 cursor-pointer bg-white/40 hover:bg-white/80 hover:text-gray-800'><EastOutlined /></div>
        </div>
    </div>
  )
}

export default Slider