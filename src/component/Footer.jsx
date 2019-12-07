import React from 'react';

function Footer () {

    const date = new Date(2019, 11, 11);
    const currentDate = date.getFullYear();


    return(
        <div>
            <footer>
            <p>Copyright©{currentDate}</p>    
            </footer>
        </div>
    );
}

export default Footer;

