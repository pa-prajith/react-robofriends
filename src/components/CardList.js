import React from 'react'
import Card from "./Card";

function CardList({robots}) {
    return (
        <div>
            {
                robots.map((rbt, itx) => (
                    <Card name={rbt.name} email={rbt.email} id={rbt.id} key={itx} />
                ))
            }
        </div>
    )
}

export default CardList;