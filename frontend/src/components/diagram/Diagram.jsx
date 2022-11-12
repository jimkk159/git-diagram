import React from 'react';
import Arrow, { FatArrow } from './Arrow';
import Node from "./Node";

import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';


function Diagram(){

    const nodeData = [
        {name:"A1",x:50,y:50,r:17,cirAttr:{"fill":"#F866FF","stroke":"#fff","stroke-width":2},cirAnimate:Raphael.animation({cx:60},500,"<>"),textAttr:{}},
        {name:"A2",x:50,y:150,r:17,cirAttr:{"fill":"#C566FF","stroke":"#fff","stroke-width":2},cirAnimate:Raphael.animation({cx:60},500,"<>"),textAttr:{}},
        {name:"A3",x:50,y:250,r:17,cirAttr:{"fill":"#FFBD66","stroke":"#fff","stroke-width":2},cirAnimate:Raphael.animation({cx:60},500,"<>"),textAttr:{}},
        {name:"A4",x:50,y:350,r:17,cirAttr:{"fill":"#7EFF66","stroke":"#fff","stroke-width":2},cirAnimate:Raphael.animation({cx:60},500,"<>"),textAttr:{}},
        {name:"A5",x:50,y:450,r:17,cirAttr:{"fill":"#7278FF","stroke":"#fff","stroke-width":2},cirAnimate:Raphael.animation({cx:60},500,"<>"),textAttr:{}}
    ]
    return (<Paper width={300} height={1000}>
            <Set>{
                nodeData.map(function(element, index){
                    return (
                    <Node index={index} name={element.name} x={element.x} y={element.y} r={element.r} cirAttr={element.cirAttr} cirAnimate={element.cirAnimate} 
                                        textX={element.x} textY={element.y} textAttr={element.textAttr} />)
                })}
            </Set>
            {/* <Set>{
                <Path d={["M111 53C111 3 111 95 111 45L103 53L119 53L111 45C111 95 111 3 111 53"]} attr={{"fill":"#333333","stroke":"#333333","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","opacity": 1}}/>
                }
            </Set> */}
            <Set>
            <Arrow />
            {/* {
                <Path d={["M111 45L103 53L119 53L111 45"]} attr={{"fill":"#333333","stroke":"#333333","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","opacity": 1}}/>
                } */}
            </Set>
            </Paper>);
}

export default Diagram;