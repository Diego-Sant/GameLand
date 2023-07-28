import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#1f1f1f]'>
      <div className='flex flex-col sm:flex-row items-center gap-y-6 md:gap-y-0 justify-between'>
        <div className='flex'>
          <div className='flex flex-col gap-y-2 md:ml-2 md:mr-2 mr-9'>
            <h1 className='font-bold text-xl mb-2'>Categorias</h1>
            <Link to="/">Novidades</Link>
            <Link to="/">Mais vendidos</Link>
            <Link to="/">Um jogador</Link>
            <Link to="/">Multijogador</Link>
          </div>
          <div className='flex flex-col mt-11 gap-y-2'>
            <Link to="/">Online</Link>
            <Link to="/">Playstation</Link>
            <Link to="/">Xbox</Link>
            <Link to="/">Nintendo</Link>
          </div>
        </div>
        <div className='md:mb-12 block sm:hidden md:block'>
            <h1 className='font-bold text-xl mb-4'>Sobre</h1>
            <p className='flex flex-wrap max-w-[215px] md:max-w-[310px]'>Somos uma loja de vendas de jogos com diversas categorias, multi plataformas e com os melhores preços!</p>
        </div>
        <div className='flex flex-col md:mr-2 gap-y-2'> 
          <h1 className='font-bold text-xl mb-2'>Contatos</h1>
          <p>+55 (21) 99679-0499</p>
          <p>diegossantana071@gmail.com</p>
          <div>
            <Link className='flex items-center gap-x-2' to="https://www.linkedin.com/in/diego-de-souza-sant-ana-7784b821b/" target='_blank'><BsLinkedin /> Linkedin</Link>
          </div>
          <div>
            <Link className='flex items-center gap-x-2' to="https://github.com/Diego-Sant" target='_blank'><BsGithub /> Github</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:mr-12 mt-5'> 
        <p>&copy; GameLand. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer