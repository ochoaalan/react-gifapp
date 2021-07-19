import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category ); // data:images es cambia el nombre de data a images en al desestrutcturacion para que tenga mas sentido nuestro codigo

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

      {loading && <p className='animate__animated animate__flash'>Loading...</p>}

        <div className='card-grid'>
        {
          images.map( img => ( 
            <GifGridItem 
              key={ img.id }
              {...img }
            />
          ))
        }
        </div>
    </>

  )
}
