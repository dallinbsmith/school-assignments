import React from 'react'
import Card from './Card'

export default function Cardlist(props){
    console.log(props)
    return (
        <div>
            {props.cards.map(card => <Card {...card} key = {card.node_id} />)}
        </div>
    )
}