import React from 'react';
import {Path} from 'react-raphael';

function ArrowHead(props){
    const arrowHeadPath = "M"+props.x+" "+props.y+"L"+(props.x-8)+" "+(props.y+8)+"L"+(props.x+8)+" "+(props.y+8)+"L"+props.x+" "+props.y;
    const arrowHeadAttr = {"fill":"#333333","stroke":"#333333","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","opacity": 1};
    return (<Path d={[arrowHeadPath]} attr={arrowHeadAttr}/>);
            
}


export default ArrowHead;