const HISTORY_KEY = 'gif-app-history';
const THEME_KEY = 'gif-app-theme';

const getHistory = () => {
    return JSON.parse( localStorage.getItem( HISTORY_KEY ) ) || [];
}

const saveHistory = ( history ) => {
    localStorage.setItem( HISTORY_KEY, JSON.stringify( history ) );
}

const saveTheme = ( theme ) => {
    localStorage.setItem( THEME_KEY, theme );
}

const getTheme = () => {
    return localStorage.getItem( THEME_KEY );
}


export {
    getHistory,
    saveHistory,
    saveTheme,
    getTheme
}