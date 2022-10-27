import React from 'react'
import "./Post.css"

export default function Post(props) {
    const {title, url, alt} = props
    return (
        <div className="post">
            <h1 className="titulo">{title}</h1>
            <img src = {url} alt={alt} />
        </div>
)
}
