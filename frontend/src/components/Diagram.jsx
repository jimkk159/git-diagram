import React from 'react';
import Circle from "./Circle";

function Diagram(){
    return (<div>
                <p>What git diagram look like</p>
                <Circle 
                    name="A1"
                    color="black"
                    backgroundColor="#FF66D3"
                />
                <Circle 
                    name="A2"
                    color="black"
                    backgroundColor="#7278FF"
                />
                <Circle 
                    name="B1"
                    color="black"
                    backgroundColor="#FFA766"
                />
                <Circle 
                    name="B2"
                    color="black"
                    backgroundColor="#99FF66"
                />
            </div>);
}

export default Diagram;