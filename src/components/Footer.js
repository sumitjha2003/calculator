import React from 'react'
import './footer.css'
export default function Footer() {
    var stringCode = "</>"
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> {stringCode} by: <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sumit-jha-245643210/">Sumit Jha</a> </p>
            <p>&copy; {currentYear} All rights reserved.</p>
            <p><a rel="noreferrer" target="_blank" href="https://github.com/sumitjha2003">github</a></p>
        </footer>
    )
}
