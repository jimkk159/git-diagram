import React from 'react';
import User from "./user/User"
import Diagram from "./diagram/Diagram"

function Body(){
    return  <div className='row'>
                <div className='col-4'>
                    <User />
                </div>
                <div className='col-8'>
                    <Diagram />
                </div>
            </div>;
}

export default Body;