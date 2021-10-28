import React, { useEffect, useState } from 'react';
import { Container } from './components/container/Container';
import { Header } from './components/Header/Header';
import { ThemeContext } from './components/AppTheme/ThemeContext';
import { getHistory, getTheme, saveHistory } from './helpers/localStore';
import { useTheme } from './hooks/useTheme';

import './App.css';




function App() {

    const [ currentTheme, setCurrentTheme ]  = useState( getTheme() || 'light' );
    const { theme, themeName } = useTheme( currentTheme );

    const initialHistory = getHistory();
    const initialName = initialHistory[0] || 'Gif';

    const [ name, setName ] = useState( initialName );
    const [ history, setHistory ] = useState( initialHistory );


    useEffect(() => {

        setHistory( history => {

            const item = name.toLowerCase().trim();
            if( !history.includes( item ) && item.length){
    
                const newHistory = [ ...history ];
                newHistory.unshift( item );

                saveHistory( newHistory );
                return  newHistory;
            }

            return history;
        })

    }, [name])

    return (
        <ThemeContext.Provider value={ { theme, themeName, setCurrentTheme } }>
            <Header setName={ setName } />
            <Container 
                search={ name } 
                history={ history }
                setName={ setName }/>
        </ThemeContext.Provider>
    );

}

export default App;
