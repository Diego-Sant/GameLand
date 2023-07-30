import React from 'react'
import Card from '../Card/card'

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            title: "The Legend of Zelda: Tears of the Kingdom",
            isNew: false,
            price: 100.00,
        },
        {
            id: 2,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: false,
            price: 200.14,
        },
        {
            id: 3,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: true,
            oldPrice: 200,
            price: 50,
        },
        {
            id: 4,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
            title: "Ratchet",
            isNew: true,
            oldPrice: 300.50,
            price: 94,
        },
    ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
        {data?.map((item) => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List