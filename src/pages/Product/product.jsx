import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';

import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux/cartReducer';
import { addToWishList } from '../../redux/favoriteReducer';

const Product = () => {
  const dispatch = useDispatch()

  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [expandedImage, setExpandedImage] = useState(null);

  const { data, loading } = useFetch(
    `/produtos/${id}?populate=*`
  );

  const handleImageClick = (src) => {
    setExpandedImage(src);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  const isItemInWishList = useSelector((state) =>
    state.favorites.products.some((item) => item.id === data?.id)
  );

  return (
    <div className='py-[20px] px-[50px] flex gap-[50px] bg-[#121212] flex-col xl:flex-row pb-20 pt-16'>

    {loading ? <div className="custom-loader"></div> : (
      <>
        <div className='flex-[1] flex flex-col sm:flex-row gap-[20px] -ml-1 sm:-ml-0'>
          <div className='flex-[1] flex justify-center items-center flex-wrap gap-x-10 sm:gap-x-0 sm:flex-col'>
            <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt={data?.attributes?.title} onClick={(e) => setSelectedImg("img")} />
            <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt={data?.attributes?.title} onClick={(e) => setSelectedImg("img2")} />
            <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url} alt={data?.attributes?.title} onClick={(e) => setSelectedImg("img3")} />
            <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img4?.data?.attributes?.url} alt={data?.attributes?.title} onClick={(e) => setSelectedImg("img4")} />
            <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img5?.data?.attributes?.url} alt={data?.attributes?.title} onClick={(e) => setSelectedImg("img5")} />
          </div>
          <div className='flex-[5] flex items-center justify-center'>
            <div className='relative'>
              {data?.attributes[selectedImg]?.data?.attributes?.url && (
                    <img onClick={() => handleImageClick(process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url)} className='w-[100%] max-w-[280px] min-w-[280px] sm:max-w-[800px] sm:min-w-[481px] bg-cover mb-2 hover:brightness-75 cursor-pointer' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt={data?.attributes?.title} />
              )}
            </div>
          </div>

            {expandedImage && (
              <>
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50' onClick={handleCloseImage}>
                  <img src={expandedImage} alt={data?.attributes?.title} className='max-w-[400px] max-h-[400px] md:max-w-[780px] md:max-h-[780px] xl:max-w-[1200px] lg:max-h-[1200px] z-[51] cursor-pointer' />
                </div>
                <button onClick={handleCloseImage} className='fixed top-4 right-4 bg-white hover:bg-white/90 w-10 h-10 text-black rounded-full font-bold p-2 z-[52]'>
                    X
                </button>
              </>
            )}

        </div>

      <div className='flex-[1] flex flex-col gap-[30px]'>
          <h1 className='text-4xl font-bold -mt-2'>{data?.attributes?.title}</h1>
          <div className='flex gap-x-4 items-center'>
          {data?.attributes?.oldPrice ? <span className='text-gray-400 text-[1.2rem] line-through'>R${data?.attributes?.oldPrice?.toFixed(2).replace('.', ',')}</span> : "" }
          <span className='text-[#7b61ff] font-bold text-[1.8rem]'>R${data?.attributes?.price?.toFixed(2).replace('.', ',')}</span>
          </div>
          <p className='text-[16px] font-[300] text-justify bg-[#1f1f1f] p-3'>{data?.attributes?.desc}</p>
          <div className="flex items-center gap-[10px]">
            <button className='border border-[#7b61ff] bg-[#7b61ff]/20 hover:bg-[#7b61ff]/50 px-[0.85rem] py-1 disabled:bg-[#ddd]/40 disabled:border-[#ddd]' onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} disabled={quantity === 1}>-</button>
            <span className='font-bold'>{quantity}</span>
            <button className='border border-[#7b61ff] bg-[#7b61ff]/20 hover:bg-[#7b61ff]/50 px-3 py-1' onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          
          <button onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            oldPrice: data.attributes.oldPrice,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity
          }))} className='w-[250px] p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500]'>
            <AddShoppingCart /> Adicionar ao Carrinho
          </button>
          <div onClick={() => dispatch(addToWishList({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            oldPrice: data.attributes.oldPrice,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url
          }))} className='flex items-center gap-2 font-[400] text-[16px] text-[#7b61ff]'>
            {isItemInWishList ? (
                <Favorite className='cursor-pointer hover:text-[#7b61ff]/60' />
              ) : (
                <FavoriteBorder className='cursor-pointer hover:text-[#7b61ff]/60' />
            )}Lista de desejos
          </div>
          <div className='bg-[#1f1f1f] flex flex-col gap-[10px] text-gray-200 font-size[14px] p-3'>
            <div className='flex gap-1'><span>Distribuidora:</span>
              {data?.attributes?.developers?.data?.map((developer) => (
                <div className='text-[#7b61ff] hover:text-white' key={developer?.id}>
                  {developer?.attributes?.title}
                </div>
              ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-1'><span>Modo de jogador:</span>
              {data?.attributes?.game_modes?.data?.map((gameMode) => (
                  <div className='text-[#7b61ff] hover:text-white' key={gameMode?.id}>
                    {gameMode?.attributes?.title}
                  </div>
              ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-1'>
              <span>Gênero:</span>
              {data?.attributes?.sub_categorias?.data?.map((genres) => (
                  <div className='text-[#7b61ff] hover:text-white' key={genres?.id}>
                  {genres?.attributes?.title}
                </div>
            ))}
            </div>
          </div>
        </div>
      </>
    )}

    </div>
  )
}

export default Product