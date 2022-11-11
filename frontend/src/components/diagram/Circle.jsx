import React from 'react';

function Node(props){
    return <svg className="node" width="100" height="100">
                <circle cx="40" cy="40" r="23" stroke="white" stroke-width="3.5" fill={props.backgroundColor} />
                <text fill="#000" font-size="25" x="27" y="48">{props.name}</text>
            </svg>;
}

export default Node;