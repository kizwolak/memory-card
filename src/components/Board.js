import React, { useState } from 'react'
import Card from './Card'

export default function Board(props) {
    const [cardArray, setCardArray] = useState([
        <Card img={'./images/lampard.webp'} name={'Lampard'} key={'Lampard'}/>,
        <Card img={'./images/hazard.webp'} name={'Hazard'} key={'Hazard'}/>,
        <Card img={'./images/zola.webp'} name={'Zola'} key={'Zola'}/>,
        <Card img={'./images/carvalho.webp'} name={'Carvalho'} key={'Carvalho'}/>,
        <Card img={'./images/cole.webp'} name={'Cole'} key={'Cole'}/>,
        <Card img={'./images/drogba.webp'} name={'Drogba'} key={'Drogba'}/>,
        <Card img={'./images/ballack.webp'} name={'Ballack'} key={'Ballack'}/>,
        <Card img={'./images/osgood.webp'} name={'Osgood'} key={'Osgood'}/>,
        <Card img={'./images/terry.webp'} name={'Terry'} key={'Terry'}/>,
        <Card img={'./images/ivanovic.webp'} name={'Ivanovic'} key={'Ivanovic'}/>,
        <Card img={'./images/mikel.webp'} name={'Mikel'} key={'Mikel'}/>,
        <Card img={'./images/anelka.webp'} name={'Anelka'} key={'Anelka'}/>,
    ])
    const generateArray = cardArray.map(card => {return card})
    return (
        <div className='board'>
            {generateArray}
        </div>
    )
}