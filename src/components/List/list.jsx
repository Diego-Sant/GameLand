import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import useFetch from '../../hooks/useFetch';

const List = ({ categoryId, subCats, maxPrice }) => {
  const { data, loading, error } = useFetch(
    `/produtos?populate=*&[filters][categorias][id]=${categoryId}${subCats.map(
      (item) => `&[filters][sub_categorias][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  const { gameMode } = useFetch(
    `/produtos?populate=*&[filters][categorias][id]=${categoryId}${subCats.map(
      (item) => `&[filters][game_modes][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  const [combinedResults, setCombinedResults] = useState([]);

  // Feito essa configuração para evitar duplicação de imagens do data e do gameMode
  useEffect(() => {
    const mergedResults = [...(gameMode || []), ...(data || [])];
    const uniqueResults = Array.from(
      new Set(mergedResults.map((item) => item.id))
    ).map((id) => mergedResults.find((item) => item.id === id));
    setCombinedResults(uniqueResults);
  }, [gameMode, data]);

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
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ${loading || error ? 'grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' : ''}`}>
      {error ? (
        'Algo de errado aconteceu. Tente novamente mais tarde!'
      ) : loading ? (
        <div className='custom-loader'></div>
      ) : (
        shuffleArray(combinedResults)?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
