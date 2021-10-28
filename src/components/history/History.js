import React, { useContext, useEffect, useRef, useState } from 'react';
import iconHistory  from '../../assets/imgs/icon_history.svg';
import iconClose  from '../../assets/imgs/icon_close.svg';
import { ThemeContext } from '../AppTheme/ThemeContext';
import { getHistory, saveHistory } from '../../helpers/localStore';

import './history.css';

export const History = ({ currentGifName, setCurrentGifName }) => {

    const [searchHistory, setSearchHistory] = useState( getHistory() );

    const { theme } =  useContext( ThemeContext );
    const { bgPrimary, bgSegundary, textIcon, textInput } = theme;


    useEffect(() => {

        setSearchHistory( searchHistory => {

            const item = currentGifName.toLowerCase().trim();
            if( !searchHistory.includes( item ) && item.length){
    
                const newSearchHistory = [ ...searchHistory ];
                newSearchHistory.unshift( item );

                saveHistory( newSearchHistory );
                return  newSearchHistory;
            }

            return searchHistory;
        })

    }, [ currentGifName ] );


    const parentElement = useRef();

    const toggleHistory = () => {
         parentElement.current.classList.toggle( "show-history" );
    }
  
    return (
        <div className="history" ref={ parentElement } style={ { backgroundColor: bgPrimary } } >

             <div className="history-header">

                 <button className="btn-close-history"
                        onClick={ toggleHistory }>
                     <img src={ iconClose } alt="Icon close"/>
                 </button>

                 <p style={ { color: textIcon } } >
                     <img className="icon-history" src={ iconHistory } alt=""/>
                     <span className="history-title">History</span>
                 </p>

             </div>

             <ul className="history-list">

                { 
                   searchHistory.map( item => ( 
                           <li 
                               key={ item } 
                               onClick={ ()=> { 
                                   toggleHistory();
                                   setCurrentGifName( item )
                                   
                                }}
                                style={ { backgroundColor: bgSegundary, color: textInput } }
                            >
                                   { item }
                            </li> 
                    ) )
                }

             </ul>

        </div>
    )
}
