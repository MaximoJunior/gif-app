import { createContext }  from 'react';

export const themes = {

    light: {
        textIcon: "#FFFFFF",
        textInput: "#212121",
        bgPrimary: "#2196F3",
        bgSegundary: "#FFFFFF",
        bgDark: "#1976D2",
        accentColor: "#009688"
    },

    dark: {
         textIcon: "#FFFFFF",
         textInput: "#FFFFFF",
         bgPrimary: "black",
         bgSegundary: "#212121",
         bgDark: "#212121",
         accentColor: "#009688"
    }

}


export const ThemeContext = createContext({});