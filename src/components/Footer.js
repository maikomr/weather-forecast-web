import React from 'react';

import './Footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <small className="text-muted">
                Maiko Morales &copy; {currentYear} 
            </small>
            &nbsp;|
            <small className="text-muted">
                Station icon made by&nbsp;
                <a href="https://www.flaticon.com/authors/flat-icons"
                    title="Flat Icons">Flat Icons</a> 
                &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                &nbsp;is licensed by&nbsp;
                <a href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                    rel="noopener noreferrer">CC 3.0 BY</a>
            </small>
            &nbsp;|
            <small className="text-muted">
                Weather icons made by&nbsp;
                <a href="https://www.flaticon.com/authors/linector"
                    title="Linector">Linector</a> 
                &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                &nbsp;is licensed by&nbsp;
                <a href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                    rel="noopener noreferrer">CC 3.0 BY</a>
            </small>
        </footer>
    );
};

export default Footer;
