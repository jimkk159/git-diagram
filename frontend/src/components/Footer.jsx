import React from 'react';
const CurrentDate = new Date();
const CurrentYear = CurrentDate.getFullYear();

function Footer(){
    return (<footer><p>&copy; Jim {CurrentYear}</p></footer>);
}

export default Footer;