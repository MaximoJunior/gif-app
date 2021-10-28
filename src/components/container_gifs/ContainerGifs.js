import React, { useContext } from 'react';
import { divideArrayByColums } from '../../helpers/divideArrayByColums';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { ThemeContext } from '../AppTheme/ThemeContext';

import './containerGifs.css';

export const ContainerGifs = ({ currentGifName, cols = 3 }) => {
    
    const { data } = useFetchGifs( currentGifName );
    const { theme, themeName } = useContext( ThemeContext );

    return (
        <div className="container-gifs">

            <div className="container-header" style={ { color: themeName === 'dark' ? theme.textIcon : theme.bgPrimary } }> 
                { currentGifName }
             </div>

            <div className="container-items">
                { 
                    divideArrayByColums( data, cols ).map( ( col, index ) => (
                        <div className="columns" key={ index }>
                            { col.map( item => (<img loading="lazy" key={ item.id } src={ item.url } alt={ item.name }/>) )} 
                        </div>
                    ) )
                }
            </div>

        </div>
    )
}
