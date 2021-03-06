import React from 'react';
import './Post.css';

const post = (props) => {
    console.log(props)
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}

//export default withRouter(post); use this to get the Posts prop in the router. try this yourself.
export default post;