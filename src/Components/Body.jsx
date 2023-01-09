import React from "react";


function Body() {

    const x = 10;
    const y = 5;

    return (
        <div>
            <h3>This is Body</h3>
            <h4>2+2={2 + 2}</h4>
            <p>{x > y ? x : y}</p>
            <p>{x > y ? 'X is Big' : "Y is Big"}</p>
            <p>{x > y ? `${x} is Big` : `${y} is Big`}</p>
        </div>
    );
}

export default Body;