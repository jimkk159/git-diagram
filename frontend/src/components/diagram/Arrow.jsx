import React from 'react';

function Arrow(props){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
                <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
                </defs>
                <line x1="0" y1="30" x2="25" y2="30" stroke="#000" 
                stroke-width="4" marker-end="url(#arrowhead)" />
            </svg>;
}

export default Arrow;