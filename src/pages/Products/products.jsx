import React, { useState } from 'react'
import List from '../../components/List/list'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(400)
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const categoryId = parseInt(useParams().id)

  const { data, loading, error } = useFetch(`/sub-categorias?[filters][categorias][id][$eq]=${categoryId}`)
  const { gameMode } = useFetch(`/game-modes?[filters][categorias][id][$eq]=${categoryId}`)

  console.log(gameMode)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
  )}

  return (
    <div className='flex bg-[#121212] py-[30px] px-[50px]'>
      <div className='flex-[1] mr-12 -ml-6'>
      <h2 className='font-bold mb-2'>Categorias</h2>
        <div className='mb-4 flex flex-col xl:flex-row gap-x-4'>
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
            <input type="range" min={0} max={400} className='rangeInput' onChange={(e) => setMaxPrice(e.target.value)} />
            <span>R${maxPrice}</span>
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-2'>Ordenar por:</h2>
          <div>
            <input type="radio" id="asc" value="asc" name='price' onChange={(e) => setSort("asc")} />
            <label className="text-sm sm:text-[1rem]" htmlFor="asc">Menor preço</label>
          </div>
          <div>
            <input type="radio" id="desc" value="desc" name='price' onChange={(e) => setSort("desc")} />
            <label className="text-sm sm:text-[1rem]" htmlFor="desc">Maior preço</label>
          </div>
        </div>
      </div>

      <div className='flex-[3]'>
        <Link to="/produto/1" className='sm:w-[100%] sm:h-[300px] hidden md:contents'><img className='bg-cover mb-[50px]' src="https://images.igdb.com/igdb/image/upload/t_original/ar6rp.jpg" alt="" /></Link>
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products