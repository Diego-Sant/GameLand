import React from 'react'
import Slider from '../../components/Slider/slider'
import Featured from '../../components/Featured/featured'
import Categories from '../../components/Categories/categories'

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured type="Destaques e Recomendações" />
      <Categories />
      <Featured type="Jogos em promoção" />
    </div>
  )
}

export default Home