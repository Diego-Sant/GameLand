import React, { useState } from 'react'
import List from '../../components/List/list'
import { Link, useParams } from 'react-router-dom'

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(400)
  const [sort, setSort] = useState(null);

  const categoryId = parseInt(useParams().id)

  return (
    <div className='flex bg-[#121212] py-[30px] px-[50px]'>
      <div className='flex-[1] mr-12 -ml-6'>
      <h2 className='font-bold mb-2'>Categorias</h2>
        <div className='mb-4 flex flex-col xl:flex-row gap-x-4'>
            <div>
              <div>
                <input type="checkbox" id='1' value={1} />
                <label className="text-sm sm:text-[1rem]" htmlFor="1">Ação</label>
              </div>
              <div>
                <input type="checkbox" id='2' value={2} />
                <label className="text-sm sm:text-[1rem]" htmlFor="2">Agricultura e Crafting</label>
              </div>
              <div>
                <input type="checkbox" id='3' value={3} />
                <label className="text-sm sm:text-[1rem]" htmlFor="3">Anime</label>
              </div>
              <div>
                <input type="checkbox" id='4' value={4} />
                <label className="text-sm sm:text-[1rem]" htmlFor="4">Arcade</label>
              </div>
              <div>
                <input type="checkbox" id='5' value={5} />
                <label className="text-sm sm:text-[1rem]" htmlFor="5">Aventura</label>
              </div>
              <div>
                <input type="checkbox" id='6' value={6} />
                <label className="text-sm sm:text-[1rem]" htmlFor="6">Cartas/Tabuleiro</label>
              </div>
              <div>
                <input type="checkbox" id='7' value={7} />
                <label className="text-sm sm:text-[1rem]" htmlFor="7">Casual</label>
              </div>
              <div>
                <input type="checkbox" id='8' value={8} />
                <label className="text-sm sm:text-[1rem]" htmlFor="8">Corrida</label>
              </div>
              <div>
                <input type="checkbox" id='9' value={9} />
                <label className="text-sm sm:text-[1rem]" htmlFor="9">Estratégia</label>
              </div>
              <div>
                <input type="checkbox" id='10' value={10} />
                <label className="text-sm sm:text-[1rem]" htmlFor="10">Espaço e Aviação</label>
              </div>
              <div>
                <input type="checkbox" id='11' value={11} />
                <label className="text-sm sm:text-[1rem]" htmlFor="11">Ficção Científica</label>
              </div>
              <div>
                <input type="checkbox" id='25' value={25} />
                <label className="text-sm sm:text-[1rem]" htmlFor="25">Física e Sandbox</label>
              </div>
              <div>
                <input type="checkbox" id='26' value={26} />
                <label className="text-sm sm:text-[1rem]" htmlFor="26">Hack & Slash</label>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" id='12' value={12} />
                <label className="text-sm sm:text-[1rem]" htmlFor="12">Luta e Artes Marciais</label>
              </div>
              <div>
                <input type="checkbox" id='13' value={13} />
                <label className="text-sm sm:text-[1rem]" htmlFor="13">Metroidvania</label>
              </div>
              <div>
                <input type="checkbox" id='14' value={14} />
                <label className="text-sm sm:text-[1rem]" htmlFor="14">Mistério e Detetives</label>
              </div>
              <div>
                <input type="checkbox" id='15' value={15} />
                <label className="text-sm sm:text-[1rem]" htmlFor="15">Mundo aberto</label>
              </div>
              <div>
                <input type="checkbox" id='16' value={16} />
                <label className="text-sm sm:text-[1rem]" htmlFor="16">Plataformas e Runners</label>
              </div>
              <div>
                <input type="checkbox" id='17' value={17} />
                <label className="text-sm sm:text-[1rem]" htmlFor="17">RPG</label>
              </div>
              <div>
                <input type="checkbox" id='18' value={18} />
                <label className="text-sm sm:text-[1rem]" htmlFor="18">RPG por Turnos</label>
              </div>
              <div>
                <input type="checkbox" id='19' value={19} />
                <label className="text-sm sm:text-[1rem]" htmlFor="19">Roguelike</label>
              </div>
              <div>
                <input type="checkbox" id='20' value={20} />
                <label className="text-sm sm:text-[1rem]" htmlFor="20">Romance Visual</label>
              </div>
              <div>
                <input type="checkbox" id='21' value={21} />
                <label className="text-sm sm:text-[1rem]" htmlFor="21">Shoot'em Up</label>
              </div>
              <div>
                <input type="checkbox" id='22' value={22} />
                <label className="text-sm sm:text-[1rem]" htmlFor="22">Simulador</label>
              </div>
              <div>
                <input type="checkbox" id='23' value={23} />
                <label className="text-sm sm:text-[1rem]" htmlFor="23">Sobrevivência</label>
              </div>
              <div>
                <input type="checkbox" id='24' value={24} />
                <label className="text-sm sm:text-[1rem]" htmlFor="24">Terror</label>
              </div>
            </div>
        </div>
        <div className='mb-4'>
          <h2 className='font-bold mb-2'>Modos de jogador</h2>
          <div>
            <input type="checkbox" id='1' value={1} />
            <label className="text-sm sm:text-[1rem]" htmlFor="1">Multijogador</label>
          </div>
          <div>
            <input type="checkbox" id='2' value={2} />
            <label className="text-sm sm:text-[1rem]" htmlFor="2">Online</label>
          </div>
          <div>
            <input type="checkbox" id='3' value={3} />
            <label className="text-sm sm:text-[1rem]" htmlFor="3">Um jogador</label>
          </div>
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
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products