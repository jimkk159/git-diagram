import React from 'react';
import Description from "./Description"
import Note from './Note';

function User(){
    return  <div className='panel'>
                <Description />
                <Note />
                <input type="text" placeHolder='Key your git commmand here'></input>
            </div>           
}

export default User;