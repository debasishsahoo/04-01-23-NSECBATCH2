import React from 'react';
import Front from './Front';
import Back from './Back'
function Card(props) {
    return (
        <div className="card">
            <Front no={props.cssNo} />
            <Back no={props.cssNo} />
        </div>
    );
}

export default Card;