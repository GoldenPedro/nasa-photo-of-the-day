import React from "react";

export default function PhotoObject ({data}) {
    return (
        <div>
            <h2>{data.title}</h2>
            <img src={data.url} alt='Astronomy pic of the day'/>
            <p>{data.explanation}</p>
            <p>{data.date}</p>
            <p>{data.copyright}</p>
        </div>
    )

}