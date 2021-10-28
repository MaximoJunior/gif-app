import React, { useContext } from 'react'
import logo from '../../assets/imgs/logo.svg';
import iconSearch from '../../assets/imgs/icon_search.svg';
import iconSearchDark from '../../assets/imgs/icon_search_dark.svg';
import iconThemeDay from '../../assets/imgs/icon_theme_day.svg';
import iconThemeNight from '../../assets/imgs/icon_theme_night.svg';
import iconHistory from '../../assets/imgs/icon_history.svg';
import { useForm } from '../../hooks/useForm';
import { ThemeContext } from '../AppTheme/ThemeContext';

import './header.css';

export const Header = ({ setCurrentGifName }) => {

  
    const { theme, setCurrentTheme, themeName } =  useContext( ThemeContext );
    const { bgPrimary, bgDark, textIcon, accentColor, textInput, bgSegundary } = theme;

    const { state, handleInputChange, resetInput } = useForm({ gif_name: "" });
    const { gif_name } = state

    const handleSubmit = (e) => {
        e.preventDefault();

        if( gif_name.trim().length > 0 ){
            setCurrentGifName ( gif_name );
        }
        resetInput();
       
    }

    const toggleThemes = {
        light: 'dark',
        dark: 'light'
    }

    const handleTheme = () => {
        setCurrentTheme( toggleThemes[ themeName] );
    }

    
    return (
        <div className="header" style={ { backgroundColor: bgPrimary } }>

            <div className="container">

                <div className="container-logo">
                    <img id="logo" src={ logo } alt="logo"/>
                    <h1 className="logo-title" style={ { color: textIcon } }>Gif App</h1>
                </div>

                <form onSubmit={ handleSubmit }  className="form-search">

                    <input  
                         type="text" 
                         placeholder="Enter gif name" 
                         autoComplete="off"
                         name="gif_name"
                         value={ gif_name }
                         onChange={ handleInputChange }
                         style={ { color: textInput, backgroundColor: bgSegundary } }/>

                    <button
                        type="submit"
                        style={ { backgroundColor: bgSegundary } }>
                        <img src={ themeName === 'light' ? iconSearch : iconSearchDark } alt="icon-search"
                        style={ { color: bgDark } }/>
                    </button>

                </form>

                <div className="container-controls">

                    <button id="btn_history"
                            onClick={ ()=> {
                                document.querySelector( ".history" ).classList.toggle("show-history");
                            }}
                            style={ { backgroundColor: accentColor } }>
                        <img src={ iconHistory } alt="icon History"/>
                    </button>

                    <button 
                        onClick={ handleTheme }
                        id="btn_theme" 
                        style={ { backgroundColor: bgDark } }
                        >
                        <img src={ themeName === 'dark' ? iconThemeDay : iconThemeNight } alt="Icon theme"/>
                    </button>

                </div>

            </div>

        </div>
    )
}
