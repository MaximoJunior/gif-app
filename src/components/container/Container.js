import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../AppTheme/ThemeContext'
import { ContainerGifs } from '../container_gifs/ContainerGifs'
import { History } from '../history/History'

import './container.css'





export const Container = ({ currentGifName, setCurrentGifName }) => {

    const { theme } =  useContext( ThemeContext );

    const { bgSegundary } = theme;

    useEffect(() => {

        document.getElementsByTagName('body')[0].style.backgroundColor = bgSegundary;
       
    }, [bgSegundary])

    return (
        <div className="main-container" style={ { backgroundColor: bgSegundary }}>
            <ContainerGifs currentGifName={ currentGifName }/>
            <History currentGifName={ currentGifName } setCurrentGifName={ setCurrentGifName }/>
        </div>
    )
}
