import React from 'react'
import Slider from '../../components/Slider/slider'
import Featured from '../../components/Featured/featured'

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured type="Destaques e Recomendações" />
      <Featured type="Jogos em promoção" />
    </div>
  )
}

export default Home