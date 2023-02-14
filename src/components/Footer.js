import React from 'react';
import { IconContext } from 'react-icons';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

export default function Footer() {
    return(
        <footer>
            <ul>
                <li>
                    <IconContext.Provider value={{ color: 'white', size: '70px' }}>
                    <a href='https://github.com/sevepalattao'>
                        <BsGithub width='50px'/>
                    </a>
                    </IconContext.Provider>
                </li>
                <li>
                    <IconContext.Provider value={{ color: 'white', size: '70px' }}>
                    <a href='https://www.linkedin.com/in/seve-palattao-739956196/'>
                        <BsLinkedin/>
                    </a>
                    </IconContext.Provider>
                </li>
            </ul>
        </footer>
    )
}
