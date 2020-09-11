import React from "react";
import {ImageDiv, Text, Copyright} from './styles'

export default function PhotoObject ({data}) {
    return (
        <div>
            <h2>{data.title}</h2>
            <ImageDiv>
                <img src={data.url} alt='Astronomy pic of the day'/>
            </ImageDiv>
            <Text>
                <p>{data.explanation}</p>
                <p>{data.date}</p>
                <Copyright>
                    <p>{data.copyright}</p>
                </Copyright>
            </Text>
        </div>
    )

}