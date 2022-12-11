import React from 'react'
import { useParams } from "react-router-dom";

const Watch = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Hello my friend in Page {id}</h1>
        </div>
    )
}

export default Watch
