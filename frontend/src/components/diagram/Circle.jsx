import React from 'react';

function Circle(props){
    return <span class="dot" 
                 style={{
                    color:props.color, 
                    backgroundColor:props.backgroundColor
                    }}>
                {props.name}
            </span>;
}

export default Circle;