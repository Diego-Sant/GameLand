import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishListItem, resetWishList } from '../../redux/favoriteReducer';
import { Box, Button, Modal } from '@mui/material';

const Favorite = () => {
    const [open, setOpen] = React.useState(false);
    const products = useSelector(state => state.favorites.products);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClosePlusDelete = () => {
        setOpen(false);
        dispatch(resetWishList())
    }

  return (
    <div className='absolute right-[55px] left-[70px] sm:left-[280px] md:left-[380px] lg:left-[580px] xl:left-[780px] 2xl:left-[980px] top-[65px] sm:top-[72px] z-[100] bg-[#2d2d2d] p-[20px]'>
        <h1 className='text-xl font-bold mb-6'>Lista de desejos</h1>
        {products?.map((item) => (
            <div key={item.id} className='flex items-center gap-[20px] mb-[30px]'>
                <Link className='w-fit min-w-[80px]' to={"http://localhost:3000/produto/" + item.id} ><img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.title} /></Link>
                <div className='flex-grow'>
                    <h1 className='font-bold text-ellipsis line-clamp-2'>{item.title}</h1>
                    <p className='text-ellipsis line-clamp-2'>{item.desc}</p>
                    <div className='flex gap-2'>
                        {item.oldPrice ? <div className='text-sm sm:text-lg'><span className='text-gray-400 line-through text-sm'>R${item.oldPrice.toFixed(2).replace('.', ',')}</span></div> : ""}
                        <div className='text-sm sm:text-lg'><span className='text-[#7b61ff] font-bold'>R${item.price.toFixed(2).replace('.', ',')}</span></div>
                    </div>
                </div>
                <DeleteOutline onClick={() => dispatch(removeWishListItem(item.id))} className='text-red-600 text-[30px] cursor-pointer hover:bg-red-600/90 hover:text-white hover:rounded-md' />
            </div>
        ))}
        <React.Fragment>
            <Button onClick={handleOpen} disabled={products.length === 0}><p className='text-red-600 hover:text-red-600/80 text-[12px]'>Limpar a lista de desejos</p></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] bg-[#2d2d2d] border-[2px] border-[#121212] pt-4 px-4 pb-3">
                <h2 id="child-modal-title" className='font-bold text-[1.3rem] mb-4'>Tem certeza que deseja excluir todos os itens da lista de desejos?</h2>
                <p id="child-modal-description" className='mb-4'>
                    Você não poderá desfazer essa ação!
                </p>
                <Button onClick={handleClosePlusDelete}><p className='text-red-600'>Limpar a lista de desejos</p></Button>
                </Box>
            </Modal>
        </React.Fragment>
    </div>
  )
}

export default Favorite