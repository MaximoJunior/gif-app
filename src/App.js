import React, {  useState } from 'react';
import { Container } from './components/container/Container';
import { Header } from './components/Header/Header';
import { ThemeContext } from './components/AppTheme/ThemeContext';
import { getHistory, getTheme } from './helpers/localStore';
import { useTheme } from './hooks/useTheme';

function App() {

    const [ currentTheme, setCurrentTheme ]  = useState( getTheme() || 'light' );
    const { theme, themeName } = useTheme( currentTheme );

    const searchHistory = getHistory();
    const name = searchHistory[0] || 'Gif';

    const [ currentGifName, setCurrentGifName ] = useState( name );
    

    return (
        <ThemeContext.Provider value={ { theme, themeName, setCurrentTheme } }>
            <Header setCurrentGifName={ setCurrentGifName } />
            <Container 
                currentGifName={ currentGifName } 
                setCurrentGifName={ setCurrentGifName }/>
        </ThemeContext.Provider>
    );

}

export default App;
