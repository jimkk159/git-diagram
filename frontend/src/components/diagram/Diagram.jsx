import React from 'react';
import Arrow, { FatArrow } from './Arrow';
import Node from "./Node";

import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';


function Diagram(){

    var data = [
        {x:50,y:50,r:17,attr:{"fill":"#a966ff","stroke":"#fff","stroke-width":2},animate:Raphael.animation({cx:60},500,"<>")},
        {x:50,y:100,r:17,attr:{"fill":"#a966ff","stroke":"#fff","stroke-width":2},animate:Raphael.animation({cx:60},500,"<>")},
        {x:50,y:150,r:17,attr:{"fill":"#a966ff","stroke":"#fff","stroke-width":2},animate:Raphael.animation({cx:60},500,"<>")}
    ]
    return (<Paper width={300} height={1000}>
            <Set>{
                data.map(function(ele,pos){
                    return (<Circle key={pos} x={ele.x} y={ele.y} r={ele.r} attr={ele.attr} animate={ele.animate}/>)
                })}
            </Set>
            <Set>{
                <Path d={["M111 53C111 3 111 95 111 45L103 53L119 53L111 45C111 95 111 3 111 53"]} attr={{"fill":"#333333","stroke":"#333333","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","opacity": 1}}/>
                }
            </Set>
            </Paper>);
}

export default Diagram;