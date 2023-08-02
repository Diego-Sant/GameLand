import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import useFetch from '../../hooks/useFetch';

const List = ({ categoryId, subCats, maxPrice, sort }) => {
  const { data, loading, error } = useFetch(
    `/produtos?populate=*&[filters][categorias][id]=${categoryId}${subCats.map(
      (item) => `&[filters][sub_categorias][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=id:${sort}`
  );

  const { gameMode } = useFetch(
    `/produtos?populate=*&[filters][categorias][id]=${categoryId}${subCats.map(
      (item) => `&[filters][game_modes][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=id:${sort}`
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

  return (
    <div className={`grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ${loading || error ? 'grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' : ''}`}>
      {error ? (
        'Algo de errado aconteceu. Tente novamente mais tarde!'
      ) : loading ? (
        <div className='custom-loader'></div>
      ) : (
        combinedResults?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
