import { NewReleases } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <div className='flex flex-col w-[210px]'>
        <Link to={`/produto/${item.id}`} className='gap-10'>
            <div className='w-[100%] h-[280px] overflow-hidden relative img-container'>
                {item.isNew && <span className='absolute flex items-center top-[5px] left-[5px] bg-[#8900ff] rounded-md py-[3px] px-[5px] font-semibold z-30'><NewReleases className='mr-1' />Novo</span>}
                <img className='w-[100%] h-[100%] object-cover absolute z-10' src={item.img} alt="Artwork do jogo" />
                <img className='w-[100%] h-[100%] object-cover absolute img2' src={item.img2} alt="Artwork secundária do jogo" />
            </div>
        </Link>
        <h2 className='text-lg font-semibold line-clamp-2 mb-2'>{item.title}</h2>
        <div className='flex gap-[20px] mb-6 items-center'>
            {item.oldPrice ? <h3 className='text-gray-400 line-through text-md'>R${item.oldPrice?.toFixed(2).replace('.', ',')}</h3> : null}
            <h3 className='text-[#f700ff] font-bold text-[1.70rem]'>R${item.price.toFixed(2).replace('.', ',')}</h3>
        </div>
    </div>
  )
}

export default Card