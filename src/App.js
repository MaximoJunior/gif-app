import React, {  useState } from 'react';
import { Container } from './components/container/Container';
import { Header } from './components/Header/Header';
import { ThemeContext } from './components/AppTheme/ThemeContext';
import { getHistory, getTheme } from './helpers/localStore';
import { useTheme } from './hooks/useTheme';

function App() {

    const { theme, themeName, changeTheme } = useTheme( getTheme() || 'light' );

    const searchHistory = getHistory();
    const gifName = searchHistory[0] || 'Gif';
    const [ currentGifName, setCurrentGifName ] = useState( gifName );
    

    return (
        <ThemeContext.Provider value={ { theme, themeName, setCurrentTheme:changeTheme } }>
            <Header setCurrentGifName={ setCurrentGifName } />
            <Container 
                currentGifName={ currentGifName } 
                setCurrentGifName={ setCurrentGifName }/>
        </ThemeContext.Provider>
    );

}

export default App;