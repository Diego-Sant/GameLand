import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import axios from 'axios';

const Featured = ({ type }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {

                const res = await axios.get(process.env.REACT_APP_API_URL + '/produtos?populate=*', // Feito o populate pois a imagem normalmente não vem junto com os attributes
                {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    },
                });

                setData(res.data.data)
            } catch (error) {
                console.log(error)
            }

        };
        fetchData();
    }, [])

    console.log(data)

  return (
    <div className='bg-[#121212]'>
        <div className='px-[100px] py-[100px]'>
            <div className='flex font-bold text-xl sm:text-2xl lg:text-4xl items-center justify-center'>
                <h1 className='mb-10'>{type}</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center'>
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Featured