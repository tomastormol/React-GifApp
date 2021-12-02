import React from 'react'

export const GifGridItem = (props) => {

    console.log(props);

    return (
        <div className="card">
            <img src={props.img.url} alt={props.img.title}/>
            <p>{props.img.title}</p>
        </div>
    )
}
