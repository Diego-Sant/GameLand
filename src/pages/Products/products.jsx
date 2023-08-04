import React, { useState } from 'react'
import List from '../../components/List/list'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const id = useParams().id
  const [maxPrice, setMaxPrice] = useState(400);
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const categoryId = parseInt(useParams().id)

  const { data } = useFetch(`/sub-categorias?[filters][categorias][id][$eq]=${categoryId}`)
  const { gameMode } = useFetch(`/game-modes?[filters][categorias][id][$eq]=${categoryId}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
  )}

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const { data: dataCategory } = useFetch(
    `/categorias/${id}?populate=*`
  );

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-y-0 bg-[#121212] py-[30px] px-[50px]'>
      <div className='flex-[1] mr-12 -ml-6'>
      <h2 className='font-bold mb-2'>Categorias</h2>
        <div className='mb-4 flex flex-row w-[350px] sm:w-full justify-between sm:flex-col xl:flex-row'>
            <div>
              {data?.slice(0, 12).map((item) => (
              <div key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.attributes.title}</label>
              </div>))}
            </div>
            <div>
              {data?.slice(13, 25).map((item) => (
                <div key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                  <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.attributes.title}</label>
                </div>))}
            </div>
        </div>
        <div className='mb-4'>
          {gameMode && gameMode.length > 0 && (
            <h2 className='font-bold mb-2'>Modos de jogador</h2>
          )}
          {gameMode?.map((item) => (
                <div key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                  <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.attributes.title}</label>
          </div>))}
        </div>
        <div className='mb-4'>
          <h2 className='font-bold mb-2'>Filtrar por preço</h2>
          <div className='flex flex-col sm:flex-row sm:items-center'>
            <span>R$0</span>
            <input type="range" min={0} max={400} className='rangeInput' onMouseUp={handleMaxPriceChange} />
            <span>R${maxPrice}</span>
          </div>
        </div>
      </div>

      <div className='flex-[3]'>
        <div className='md:flex justify-center items-center hidden'><img className='bg-cover mb-[50px] xl:max-w-[880px] xl:min-w-[880px] 2xl:max-w-[1100px] 2xl:min-w-[1100px] 3xl:max-w-[1300px] 3xl:min-w-[1300px]' src={process.env.REACT_APP_UPLOAD_URL + dataCategory?.attributes?.img?.data?.attributes?.url} alt={dataCategory?.attributes?.img?.data?.title} /></div>
        <List categoryId={categoryId} maxPrice={maxPrice} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products