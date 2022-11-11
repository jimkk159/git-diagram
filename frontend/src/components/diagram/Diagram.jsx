import React from 'react';
import Arrow from './Arrow';
import Node from "./Circle";

function Diagram(){
    return (<div>
                <p>What git diagram look like</p>
                <Arrow />
                <Node 
                    name="A1"
                    color="black"
                    backgroundColor="#FF66D3"
                />
                <Node 
                    name="A2"
                    color="black"
                    backgroundColor="#7278FF"
                />
                <Node 
                    name="B1"
                    color="black"
                    backgroundColor="#FFA766"
                />
                <Node 
                    name="B2"
                    color="black"
                    backgroundColor="#99FF66"
                />
            </div>);
}

export default Diagram;