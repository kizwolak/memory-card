import React, { useState } from 'react'
import Card from './Card'

export default function Board() {
    const [infoArray, setInfoArray] = useState([
        {
            name:'Lampard',
            img:'./images/lampard.webp',
        },
        {
            name:'Hazard',
            img:'./images/hazard.webp'
        },
        {
            name:'Zola',
            img:'./images/zola.webp'
        },
        {
            name:'Carvalho',
            img:'./images/carvalho.webp'
        },
        {
            name:'Cole',
            img:'./images/cole.webp'
        },
        {
            name:'Drogba',
            img:'./images/drogba.webp'
        },
        {
            name:'Ballack',
            img:'./images/ballack.webp'
        },
        {
            name:'Osgood',
            img:'./images/osgood.webp'
        },
        {
            name:'Terry',
            img:'./images/terry.webp'
        },
        {
            name:'Ivanovic',
            img:'./images/ivanovic.webp'
        },
        {
            name:'Mikel',
            img:'./images/mikel.webp'
        },
        {
            name:'Anelka',
            img:'./images/anelka.webp'
        }
    ])
    const generateArray = infoArray.map(card => {
        return (
            <Card name={card.name} img={card.img} onClick={() => shuffleArray(infoArray)} key={card.name}/>
        )
    })
    function shuffleArray(array) {
        const shuffledArray = array;
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setInfoArray([...shuffledArray]);
        console.log(infoArray)
    }
    return (
        <div className='board'>
            {generateArray}
        </div>
    )
}

{/* <Card img={'./images/lampard.webp'} name={'Lampard'} key={'Lampard'} onClick={shuffleArray}/>,
<Card img={'./images/hazard.webp'} name={'Hazard'} key={'Hazard'} onClick={shuffleArray}/>,
<Card img={'./images/zola.webp'} name={'Zola'} key={'Zola'} onClick={shuffleArray}/>,
<Card img={'./images/carvalho.webp'} name={'Carvalho'} key={'Carvalho'} onClick={shuffleArray}/>,
<Card img={'./images/cole.webp'} name={'Cole'} key={'Cole'} onClick={shuffleArray}/>,
<Card img={'./images/drogba.webp'} name={'Drogba'} key={'Drogba'} onClick={shuffleArray}/>,
<Card img={'./images/ballack.webp'} name={'Ballack'} key={'Ballack'} onClick={shuffleArray}/>,
<Card img={'./images/osgood.webp'} name={'Osgood'} key={'Osgood'} onClick={shuffleArray}/>,
<Card img={'./images/terry.webp'} name={'Terry'} key={'Terry'} onClick={shuffleArray}/>,
<Card img={'./images/ivanovic.webp'} name={'Ivanovic'} key={'Ivanovic'} onClick={shuffleArray}/>,
<Card img={'./images/mikel.webp'} name={'Mikel'} key={'Mikel'} onClick={shuffleArray}/>,
<Card img={'./images/anelka.webp'} name={'Anelka'} key={'Anelka'} onClick={shuffleArray}/>, */}