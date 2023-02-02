import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
    const { current, setCurrent } = props

    return (
        <header>
            <h1>
                Seve Palattao
            </h1>
            <Navigation current={current} setCurrent={setCurrent}>
            </Navigation>
        </header>
    );
}