'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NavLink from './NavLink';
import ContactMe from './ContactMeModal';

export default function TopNavBar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="pt-3">
            <Navbar
                isBordered
                className="w-9/12 m-auto rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 fixed top-2"
                classNames={{
                    item: [
                        'flex',
                        'relative',
                        'h-full',
                        'items-center',
                        'transition-all',
                        'duration-300',
                        'data-[active=true]:after:content-[""]',
                        'data-[active=true]:after:absolute',
                        'data-[active=true]:after:bottom-0',
                        'data-[active=true]:after:left-0',
                        'data-[active=true]:after:right-0',
                        'data-[active=true]:after:h-[2px]',
                        'data-[active=true]:after:rounded-[2px]',
                        'data-[active=true]:after:bg-secondary',
                        'data-[active=true]:after:transition-all',
                        'data-[active=true]:after:duration-300',
                    ],
                }}
            >
                <NavbarBrand>
                    <h1>Hello</h1>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-10" justify="center">
                    <NavLink href="home" label="Home" isActive={activeSection === 'home'} onClick={(e) => handleClick(e, 'home')} />
                    <NavLink href="skills" label="Skills" isActive={activeSection === 'skills'} onClick={(e) => handleClick(e, 'skills')} />
                    <NavLink href="experiences" label="Experiences" isActive={activeSection === 'experiences'} onClick={(e) => handleClick(e, 'experiences')} />
                    <NavLink href="projects" label="Projects" isActive={activeSection === 'projects'} onClick={(e) => handleClick(e, 'projects')} />
                </NavbarContent>
                <NavbarContent justify="end">
                    <ContactMe />
                </NavbarContent>
            </Navbar>
        </div>
    );
}
