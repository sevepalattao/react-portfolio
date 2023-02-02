import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

export default function Footer() {
    return(
        <footer>
            <ul>
                <li>
                    <a href='https://github.com/sevepalattao'>
                        <BsGithub/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/seve-palattao-739956196/'>
                        <BsLinkedin/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}