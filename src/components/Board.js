import React, { useState } from 'react'
import Card from './Card'
import Counter from './Counter'

export default function Board() {
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
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
    const [takenCards, setTakenCards] = useState([]);
    console.log(takenCards);
    function pushToTaken(e) {
        const textToBePushed = e.currentTarget.textContent;
        const arrayToBePushed = [];
        if (takenCards.includes(textToBePushed)) {
            if (score > hiScore) setHiScore(score)
            setScore(0);
        } else {
            arrayToBePushed.push(textToBePushed);
            setTakenCards(prevSet => [...prevSet, textToBePushed]);
            setScore(prevScore => prevScore + 1);
        }
    }
    const generateArray = infoArray.map(card => {
        return (
            <Card name={card.name} img={card.img} onClick={(e) => {
                shuffleArray(infoArray);
                pushToTaken(e)}} key={card.name}/>
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
        <div className='game'>
            <div className='board'>
            {generateArray}
            </div>
            <Counter score={score} hiScore={hiScore}/>
        </div>
    )
}