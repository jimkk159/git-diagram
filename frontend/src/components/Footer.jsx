import React from 'react';
const CurrentDate = new Date();
const CurrentYear = CurrentDate.getFullYear();

function Footer(){
    return (<footer>
                <div className='row'>
                    <p>&copy; Jim {CurrentYear}</p>
                </div>
            </footer>);
}

export default Footer;