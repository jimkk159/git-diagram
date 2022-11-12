import React from 'react';
import {Set, Circle, Text} from 'react-raphael';

function Node(props){
    const textAttr = {"fill":"#000", "text-anchor":"middle","font-family":"Menlo, Monaco, Consolas, 'Droid Sans Mono', monospace","font-size":"12px","stroke":"none","font-weight": "bold", "opacity": 1, "cursor": "pointer",...props.textAttr};
    const cirAttr = {"fill":"#a966ff","stroke":"#fff","stroke-width":2,...props.cirAttr};
    return (<Set>
                <Circle index={props.index} x={props.x} y={props.y} r={props.r} attr={cirAttr} animate={props.cirAnimate}/>
                <Text index={props.index} x={60} y={props.y} text= {props.name} attr={textAttr}/>
            </Set>);
}

export default Node;