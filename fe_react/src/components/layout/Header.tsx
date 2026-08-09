'use client';

import Logo from './Logo';
import Nav from './Nav';
import ButtonIcon from '@/src/components/core/ButtonIcon';

export default function Header() {
    function onLogin () {
        console.log('logging in')
    }

    return (
        <header className="flex justify-between items-center pt-8">
            <Logo />
            <Nav />
            <ButtonIcon iconName="warehouse" className="" onClick={onLogin}/>
        </header>
    );
}