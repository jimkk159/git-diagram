import React from 'react';
import Title from "./Title"
import Description from "./Description"
import Note from './Note';
import User from "./User"
import Diagram from "./Diagram"

function Body(){
    return <div>
                <Title />
                <Description />
                <Note />
                <User />
                <Diagram />
            </div>;
}

export default Body;