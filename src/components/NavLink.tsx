'use client';

import React from 'react';
import Link from 'next/link';
import { NavbarItem } from '@nextui-org/react';

type Props = {
    href: string;
    label: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, label, isActive, onClick }: Props) => {
    return (
        <NavbarItem isActive={isActive}>
            <a href={`#${href}`} aria-current={isActive ? 'page' : undefined} onClick={onClick}>
                {label}
            </a>
        </NavbarItem>
    );
};

export default NavLink;
