import React, { useEffect, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'

import { KeyboardArrowDown, Search, PersonOutlineOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, Menu as MenuIcon, Language, People, Person, ShowChart, NewReleases } from '@mui/icons-material'
import { BsPlaystation, BsXbox, BsNintendoSwitch } from 'react-icons/bs';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth <= 1100);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='bg-[#1f1f1f] py-2'> {/* Navbar */}
      <div className='flex justify-between'> {/* Wrapper */}
        <div className='flex items-center gap-x-4'>  {/* Left */}

          <div className='ml-2'> {/* Item */}
            <Link to="/"><img className='w-20 h-20' src="images/logo.png" alt="Gameland" /></Link>
          </div>

          <div className='flex'> {/* Item */}
            <img className='w-9 h-6' src="images/brasil.png" alt="Bandeira do Brasil" />
            <KeyboardArrowDown className='cursor-pointer' />
          </div>
          <div className='-ml-2'> {/* Item */}
            <span>BRL</span>
          </div>

          {isDesktop ? (
            <>
              <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <MenuIcon className='text-white' />
              </Button>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                  <div className='bg-[#2d2d2d] text-white p-6'>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/1"><NewReleases />Novidades</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/2"><ShowChart />Mais vendidos</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/3"><Person />Um jogador</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/4"><People />Multijogador</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/5"><Language />Online</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/6"><BsPlaystation className='h-6 w-6' />Playstation</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/7"><BsXbox className='h-6 w-6' />Xbox</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className='flex gap-x-3' to="/produtos/8"><BsNintendoSwitch className='h-6 w-6' />Nintendo</Link></MenuItem>
                  </div>
              </Menu>
            </>
          ) : (
            <>
              <div>
                <Link to="/produtos/1">Novidades</Link>
              </div>
              <div>
                <Link to="/produtos/2">Mais vendidos</Link>
              </div>
              <div>
                <Link to="/produtos/3">Um jogador</Link>
              </div>
              <div>
                <Link to="/produtos/4">Multijogador</Link>
              </div>
              <div>
                <Link to="/produtos/5">Online</Link>
              </div>
              <div>
                <Link to="/produtos/6">Playstation</Link>
              </div>
              <div>
                <Link to="/produtos/7">Xbox</Link>
              </div>
              <div>
                {/* Item */}
                <Link to="/produtos/8">Nintendo</Link>
              </div>
            </>
          )}

        </div>
        <div className='flex items-center mr-4'>  {/* Right */}
            <div className='flex gap-x-4 cursor-pointer'>
              <Search />
              <PersonOutlineOutlined />
              <FavoriteBorderOutlined />
              <div className='relative'>
                <ShoppingCartOutlined />
                <span className='flex justify-center items-center absolute -right-[10px] -top-[10px] text-[16px] w-[20px] h-[20px] bg-[#8900ff] rounded-full'>0</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar