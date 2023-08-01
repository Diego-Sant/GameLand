import { NewReleases } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <div className='flex flex-col w-[210px] border border-gray-200 mb-6'>
        <Link to={`/produto/${item.id}`} className='gap-10'>
            <div className='w-[100%] h-[280px] overflow-hidden relative img-container'>
                {item?.attributes.isNew && <span className='absolute flex items-center top-[5px] left-[5px] bg-[#8900ff] rounded-md py-[3px] px-[5px] font-semibold z-30'><NewReleases className='mr-1' />Novo</span>}
                <img className='w-[100%] h-[100%] object-cover absolute z-10' src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} alt="Artwork do jogo" />
                <img className='w-[100%] h-[100%] object-cover absolute img2' src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} alt="Artwork secundária do jogo" />
            </div>
        </Link>
        <h2 className='text-lg font-semibold line-clamp-2 mb-2 ml-1'>{item?.attributes.title}</h2>
        <div className='flex items-end flex-grow text-end mr-1 ml-1'>
            {item?.attributes.oldPrice ? <h3 className='text-gray-400 line-through text-md mb-2'>R${item?.attributes.oldPrice?.toFixed(2).replace('.', ',')}</h3> : null}
            <h3 className='text-[#7b61ff] font-bold text-[2rem] flex-grow text-right'>R${item?.attributes.price.toFixed(2).replace('.', ',')}</h3>
        </div>
    </div>
  )

  // Os caminhos foram pegos no console.log
  // Attributes foram adicionados depois do item pois é a ordem que a api do strapi funciona, id: 1 => attributes => isNew, oldPrice, price, etc.
  // Em imagem é id: 1 => attributes => img => data => attributes => url
}

export default Card