import { useEffect, useState } from "react";
import { themes } from "../components/AppTheme/ThemeContext";
import { saveTheme } from "../helpers/localStore";

export const useTheme = ( name = 'light' ) => {

    const [ themeName, setTheme ] = useState( name );
    let initialTheme  = themes[ themeName ];

    useEffect(() => {
        saveTheme( themeName );
    }, [themeName])

    const changeTheme = ( theme ) => {
        setTheme( theme );
    }

    return { theme: initialTheme , themeName, changeTheme };
}