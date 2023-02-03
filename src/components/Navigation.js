import React from 'react';

export default function Navigation(props) {
    const {
        current, setCurrent
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <a href='#About'
                    onClick={() => setCurrent("About")}
                    className={current === "About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a href='#Portfolio'
                    onClick={() => setCurrent("Portfolio")}
                    className={current === "Portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#Contact'
                    onClick={() => setCurrent("Contact")}
                    className={current === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#Resume'
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
