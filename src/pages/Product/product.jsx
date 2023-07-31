import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
  ]

  return (
    <div className='py-[20px] px-[50px] flex gap-[50px] bg-[#121212] flex-col xl:flex-row pb-20 pt-16'>

      <div className='flex-[1] flex flex-col sm:flex-row gap-[20px] -ml-1 sm:-ml-0'>
        <div className='flex-[1] flex flex-wrap gap-x-10 sm:gap-x-0 sm:flex-col'>
          <img className='w-[100%] max-w-[95px] min-w-[95px] h-[120px] bg-cover cursor-pointer mb-[10px]' src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img className='w-[100%] max-w-[95px] min-w-[95px] h-[120px] bg-cover cursor-pointer mb-[10px]' src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img className='w-[100%] max-w-[95px] min-w-[95px] h-[120px] bg-cover cursor-pointer mb-[10px]' src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
          <img className='w-[100%] max-w-[95px] min-w-[95px] h-[120px] bg-cover cursor-pointer mb-[10px]' src={images[3]} alt="" onClick={(e) => setSelectedImg(3)} />
          <img className='w-[100%] max-w-[95px] min-w-[95px] h-[120px] bg-cover cursor-pointer mb-[10px]' src={images[4]} alt="" onClick={(e) => setSelectedImg(4)} />
        </div>
        <div className='flex-[5] flex items-center'>
          <img className='w-[100%] max-w-[481px] min-w-[400px] sm:min-w-[481px] bg-cover mb-2' src={images[selectedImg]} alt="" />
        </div>
      </div>

    <div className='flex-[1] flex flex-col gap-[30px]'>
        <h1 className='text-4xl font-bold -mt-2'>Rachet & Clank: Rift Apart</h1>
        <span className='text-[#7b61ff] font-bold text-[1.8rem]'>R$100,00</span>
        <p className='text-[16px] font-[300] text-justify bg-[#1f1f1f] p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis magni delectus sit dolorem neque ad doloremque esse, laborum eaque cum dignissimos, atque, voluptate quibusdam id. Dolorum beatae esse doloribus?</p>
        <div className="flex items-center gap-[10px]">
          <button className='border border-[#7b61ff] bg-[#7b61ff]/20 hover:bg-[#7b61ff]/50 px-[0.85rem] py-1 disabled:bg-[#ddd]/40 disabled:border-[#ddd]' onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} disabled={quantity === 1}>-</button>
          <span className='font-bold'>{quantity}</span>
          <button className='border border-[#7b61ff] bg-[#7b61ff]/20 hover:bg-[#7b61ff]/50 px-3 py-1' onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className='w-[250px] p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500]'>
          <AddShoppingCart /> Adicionar ao Carrinho
        </button>
        <div className='flex items-center gap-2 font-[400] text-[16px] text-[#7b61ff]'>
          <FavoriteBorder className='cursor-pointer hover:text-[#7b61ff]/60' />Lista de desejos
        </div>
        <div className='bg-[#1f1f1f] flex flex-col gap-[10px] text-gray-200 font-size[14px] p-3'>
          <div><span>Distribuidora:</span><Link className='text-[#7b61ff] hover:text-white'> Nintendo</Link></div>
          <div><span>Modo de jogador:</span><Link className='text-[#7b61ff] hover:text-white'> Um jogador</Link></div>
          <div><span>Gênero:</span>
            <Link className='text-[#7b61ff] hover:text-white'> Ação</Link>,
            <Link className='text-[#7b61ff] hover:text-white'> Aventura</Link>, 
            <Link className='text-[#7b61ff] hover:text-white'> RPG</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product