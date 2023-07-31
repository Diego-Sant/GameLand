import { DeleteOutline } from '@mui/icons-material'
import React from 'react'

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the KingdomThe Legend of Zelda: Tears of the KingdomThe Legend of Zelda: Tears of the KingdomThe Legend of Zelda: Tears of the Kingdom",
            isNew: false,
            price: 100.00,
        },
        {
            id: 2,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            desc: "RatchetDesc",
            isNew: false,
            price: 200.14,
        },
    ]

  return (
    <div className='absolute right-[10px] left-[100px] sm:left-[300px] md:left-[400px] lg:left-[600px] xl:left-[800px] 2xl:left-[1000px] top-[65px] sm:top-[72px] z-[100] bg-[#2d2d2d] p-[20px]'>
        <h1 className='text-xl font-bold mb-6'>Produtos no carrinho</h1>
        {data?.map((item) => (
            <div key={item.id} className='flex items-center gap-[20px] mb-[30px]'>
                <img className='w-[80px] h-[100px] bg-cover' src={item.img} alt="" />
                <div className='flex-grow'>
                    <h1 className='font-bold text-ellipsis line-clamp-2'>{item.title}</h1>
                    <p className='text-ellipsis line-clamp-2'>{item.desc}</p>
                    <div className='text-sm sm:text-lg'>1 x <span className='text-[#7b61ff] font-bold'>R${item.price.toFixed(2).replace('.', ',')}</span></div>
                </div>
                <DeleteOutline className='text-red-600 text-[30px] cursor-pointer hover:bg-red-600/90 hover:text-white hover:rounded-md' />
            </div>
        ))}
        <div className='text-lg flex items-center justify-between mb-3'>
            <span>TOTAL: </span>
            <span className='text-[#7b61ff] font-bold text-2xl'>R$123</span>
        </div>
        <div className='flex items-center justify-center'>
            <button className='w-full p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
            Finalizar compra
            </button>
        </div>
        <span className='text-red-600 text-[12px] cursor-pointer hover:text-red-600/80'>Limpar o carrinho</span>
    </div>
  )
}

export default Cart