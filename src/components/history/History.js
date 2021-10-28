import React, { useContext, useRef } from 'react';
import iconHistory  from '../../assets/imgs/icon_history.svg';
import iconClose  from '../../assets/imgs/icon_close.svg';

import './history.css';
import { ThemeContext } from '../AppTheme/ThemeContext';

export const History = ({ history = [], setName}) => {

    const { theme } =  useContext( ThemeContext );
    const { bgPrimary, bgSegundary, textIcon, textInput } = theme;

    const parentElement = useRef();

    const toggleHistory = () => {
         parentElement.current.classList.toggle( "show-history" );
    }
  
    return (
        <div className="history" ref={ parentElement } style={ { backgroundColor: bgPrimary } } >
             <div className="history-header">
                 <button className="btn-close-history"
                        onClick={ ()=> {
                            // document.querySelector( ".history" ).classList.toggle("show-history");
                            toggleHistory();
                        }}>
                     <img src={ iconClose } alt="Icon close"/>
                 </button>
                 <p style={ { color: textIcon } } >
                     <img className="icon-history" src={ iconHistory } alt=""/>
                     <span className="history-title">History</span>
                 </p>
             </div>
             <ul className="history-list">
                { 
                   history.map( item => ( 
                           <li 
                               key={ item } 
                               onClick={ ()=> { 
                                   toggleHistory();
                                   setName( item )
                                   
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
