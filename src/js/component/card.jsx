import React, { useEffect, useState } from "react";


export const Card = (props) => {

    console.log('log desde card')
    console.log('props es un objeto', props)
    //    let total = 0

    const [total, setTotal] = useState(0)

    const counter = () => {
        setTotal(total + 1)
        console.log('log dentro de counter', total)
    }


    return (
        <div className="card" style={{ width: '20rem' }}>
            {total}
            <figure>
                <img className="card-img-top" src={props.img} alt={props.body} />
            </figure>
            <div className="card-body">
                {props.body}
            </div>
            <button className="btn btn-primary">select!</button>
            <button className="btn btn-secondary" onClick={counter} >add to total</button>

        </div>
    )
}