import Card from '../Card/card'
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const Featured = ({ type }) => {
    const {data, loading, error} = useFetch(`/produtos?populate=*&[filters][type][$eq]=${type}`)
    // Feito o populate pois a imagem normalmente não vem junto com os attributes
    // Filtragem por type precisam ser idênticos ao strapi, por exemplo, no home.jsx, o type é "Destaques e Recomendações", no strapi precisa ser exatamente igual para acontecer a filtragem

    const [maxItemsToShow, setMaxItemsToShow] = useState(10);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    useEffect(() => {
        if (windowWidth <= 600) {
          setMaxItemsToShow(5);
        } else {
          setMaxItemsToShow(10);
        }
    }, [windowWidth]);

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
    
        return array;
    };

  return (
    <div className='bg-[#121212]'>
        <div className='px-[100px] py-[100px]'>
            <div className='flex font-bold text-xl sm:text-2xl lg:text-4xl items-center justify-center'>
                <h1 className='mb-10'>{type}</h1>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center ${loading || error ? 'grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' : ''}`}>
                {error ? "Algo de errado aconteceu. Tente novamente mais tarde!" 
                : (loading ? <div className="custom-loader"></div> 
                : (data && shuffleArray(data).slice(0, maxItemsToShow).map((item) => (
                    <Card item={item} key={item.id} />
                ))))}
            </div>
        </div>
    </div>
  )
}

export default Featured