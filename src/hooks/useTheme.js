import { useEffect, useState } from "react";
import { themes } from "../components/AppTheme/ThemeContext";
import { saveTheme } from "../helpers/localStore";



export const useTheme = ( name = 'light' ) => {


    let initialTheme  = themes[name];


    const [ themeName, setTheme ] = useState( name );

    useEffect(() => {

        saveTheme( name );
        setTheme( name );

    }, [name])


    return { theme: initialTheme , themeName };
}