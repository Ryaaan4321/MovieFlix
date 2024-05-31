import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'


const TitleCards = () => {
  return (
    <div className='title-cards'>
      <h1>Popular On Netflix</h1>
      <div className="card-list">
        {cards_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
