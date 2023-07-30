import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='bg-[#121212] flex h-[80vh] gap-[10px] p-[10px]'>
        <div className='flex flex-1 flex-col gap-[10px]'>
            <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                <img className='object-cover w-[100%] h-[100%]' src="https://images.igdb.com/igdb/image/upload/t_720p/sc8bit.jpg" alt="" />
                <Link to="/produtos/1">
                    <button className='absolute min-w-[100px] h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto w-fit cursor-pointer border-none bg-white/40 hover:bg-white/80 uppercase font-bold rounded-md hover:text-[#121212]'>
                        Novidades
                    </button>
                </Link>
            </div>
            <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                <img className='object-cover w-[100%] h-[100%]' src="https://images.igdb.com/igdb/image/upload/t_original/vfdeo6kgu0o4cyzd0sng.jpg" alt="" />
                <Link to="/produtos/1">
                    <button className='absolute min-w-[100px] h-[50px] p-[4px] top-0 bottom-0 left-0 right-0 m-auto w-fit cursor-pointer border-none bg-white/40 hover:bg-white/80 uppercase font-bold rounded-md hover:text-[#121212]'>
                        Mais vendidos
                    </button>
                </Link>
            </div>
        </div>
        <div className='flex flex-1 sm:flex-1 flex-col gap-[10px]'>
            <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                <img className='object-cover w-[100%] h-[100%]' style={{objectPosition:"48%"}} src="https://images.igdb.com/igdb/image/upload/t_original/ar6rp.jpg" alt="" />
                <Link to="/produtos/1">
                    <button className='absolute min-w-[100px] h-[50px] p-[4px] top-0 bottom-0 left-0 right-0 m-auto w-fit cursor-pointer border-none bg-white/40 hover:bg-white/80 uppercase font-bold rounded-md hover:text-[#121212]'>
                        Um jogador
                    </button>
                </Link>
            </div>
        </div>
        <div className='flex flex-1 flex-col gap-[10px] flex-2'>
            <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                <div className='flex flex-1 flex-col gap-[10px]'>
                    <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                        <img className='object-cover w-[100%] h-[100%]' style={{objectPosition:"65%"}} src="https://images.igdb.com/igdb/image/upload/t_original/scka81.jpg" alt="" />
                        <Link to="/produtos/1">
                            <button className='absolute min-w-[100px] h-[50px] p-[4px] top-0 bottom-0 left-0 right-0 m-auto w-fit cursor-pointer border-none bg-white/40 hover:bg-white/80 uppercase font-bold rounded-md hover:text-[#121212]'>
                                Multi jogador
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 gap-[10px] relative overflow-hidden'>
                <img className='object-cover w-[100%] h-[100%]' style={{objectPosition:"0%"}} src="https://images.igdb.com/igdb/image/upload/t_720p/ar1nk8.jpg" alt="" />
                <Link to="/produtos/1">
                    <button className='absolute min-w-[100px] h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto w-fit cursor-pointer border-none bg-white/40 hover:bg-white/80 uppercase font-bold rounded-md hover:text-[#121212]'>
                        Online
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories