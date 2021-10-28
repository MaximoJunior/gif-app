import React from 'react';
import { divideArrayByColums } from '../../helpers/divideArrayByColums';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// import { ThemeContext } from '../AppTheme/ThemeContext';
import './containerGifs.css';

export const ContainerGifs = ({ name, cols = 3 }) => {

    
    const { data, loading } = useFetchGifs( name );


    console.log( data, loading )

    return (
        <div className="container-gifs">

            <div className="container-header"> { name } </div>

            <div className="container-items">
                { divideArrayByColums( data, cols ).map( ( col, index ) => (
                    <div className="columns" key={ index }>
                        { col.map( item => <img loading="lazy" key={ item.id } src={ item.url } alt={ item.name }/> )} 
                    </div>
                ) )}
            </div>

        </div>
    )
}
