import React from 'react';

export default function Navigation(props) {
    const {
        current, setCurrent
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <a href='#about'
                    onClick={() => setCurrent("About")}
                    className={current === "About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a href='#portfolio'
                    onClick={() => setCurrent("Portfolio")}
                    className={current === "Portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#contact'
                    onClick={() => setCurrent("Contact")}
                    className={current === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#resume'
                    onClick={() => setCurrent("Resume")}
                    className={current === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
        );
}
