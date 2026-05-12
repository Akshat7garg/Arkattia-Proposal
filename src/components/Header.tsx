'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [gamesOpen, setGamesOpen] = useState(false)
    const [mobileGamesOpen, setMobileGamesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (sidebarOpen && sidebarRef.current) {
            gsap.fromTo(
                sidebarRef.current,
                {
                    x: '100%',
                },
                {
                    x: '0%',
                    duration: 0.8,
                    ease: 'power4.out',
                }
            )
        }
    }, [sidebarOpen])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* HEADER */}
            <header className='fixed top-0 left-0 z-50 w-full h-16'>

                {/* BACKGROUND */}
                <div
                    className={`absolute inset-0 transition-all duration-500 ${scrolled
                        ? 'bg-black/74 backdrop-blur-2xl border-b border-white/10'
                        : 'border-b border-transparent'
                        }`}
                />

                {/* GRID */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                <div className='relative z-20 h-full px-5 md:px-8 lg:px-12'>

                    <div className='flex items-center justify-between h-full'>

                        {/* LOGO */}
                        <Link
                            href='/'
                            className='relative flex items-center shrink-0 group'
                        >
                            <div className='relative w-28 h-7'>
                                <Image
                                    src='/logo.png'
                                    alt='ARKATTIA'
                                    fill
                                    priority
                                    className='object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                                />
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className='hidden xl:flex items-center gap-10'>

                            <Link
                                href='#'
                                className='relative text-[10px] uppercase tracking-[0.24em] text-white hover:text-[#ffe038] transition-colors duration-300'
                            >
                                HOME

                                <span className='absolute -bottom-2 left-0 w-full h-px bg-[#ffe038]' />
                            </Link>

                            {/* GAMES */}
                            <div
                                className='relative group'
                                onMouseEnter={() => setGamesOpen(true)}
                                onMouseLeave={() => setGamesOpen(false)}
                            >

                                <button className='flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/75 hover:text-[#ffe038] transition-colors duration-300'>
                                    GAMES

                                    <ChevronDown
                                        size={13}
                                        className={`transition-transform duration-300 ${gamesOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* DROPDOWN */}
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 ${gamesOpen
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible translate-y-3'
                                        }`}
                                >

                                    <div className='relative w-65 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)]'>

                                        {/* GLOW */}
                                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,224,56,0.06),transparent_60%)]' />

                                        {[
                                            'PROJECT FUJIN',
                                            'GHOST HUNT',
                                            'ENTITY UNKNOWN',
                                        ].map((item, index) => (
                                            <Link
                                                key={index}
                                                href='#'
                                                className='relative block px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-[#ffe038] hover:bg-white/3 transition-all duration-300 border-b border-white/5 last:border-none'
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href='#technology'
                                className='text-[10px] uppercase tracking-[0.24em] text-white/75 hover:text-[#ffe038] transition-colors duration-300'
                            >
                                TECHNOLOGY
                            </Link>

                            <Link
                                href='#about'
                                className='text-[10px] uppercase tracking-[0.24em] text-white/75 hover:text-[#ffe038] transition-colors duration-300'
                            >
                                STUDIO
                            </Link>

                            <Link
                                href='#community'
                                className='text-[10px] uppercase tracking-[0.24em] text-white/75 hover:text-[#ffe038] transition-colors duration-300'
                            >
                                COMMUNITY
                            </Link>
                        </nav>

                        {/* RIGHT */}
                        <div className='flex items-center gap-5'>

                            {/* CTA */}
                            <Link
                                href='#community'
                                className='hidden md:inline-flex group relative items-center gap-3 overflow-hidden rounded-md border border-white/10 bg-black/30 backdrop-blur-xl px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/10 hover:text-[#ffe038]'
                            >
                                <span className='relative z-10'>
                                    JOIN ARKATTIA
                                </span>

                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5' />
                            </Link>

                            {/* MENU BUTTON */}
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className='group flex xl:hidden flex-col justify-center gap-1.25 w-11 h-11 rounded-md border border-white/10 bg-black/40 backdrop-blur-xl hover:border-[#ffe038]/30 transition-all duration-300'
                            >
                                <span className='w-5 h-px bg-white mx-auto transition-all duration-300 group-hover:bg-[#ffe038]' />

                                <span className='w-4 h-px bg-white mx-auto transition-all duration-300 group-hover:bg-[#ffe038]' />

                                <span className='w-5 h-px bg-white mx-auto transition-all duration-300 group-hover:bg-[#ffe038]' />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE SIDEBAR */}
            {sidebarOpen && (
                <div className='fixed inset-0 z-100 xl:hidden'>

                    {/* OVERLAY */}
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className='absolute inset-0 bg-black/75 backdrop-blur-sm'
                    />

                    {/* SIDEBAR */}
                    <div
                        ref={sidebarRef}
                        className='absolute right-0 top-0 h-full w-full max-w-105 overflow-hidden border-l border-white/10'
                    >

                        {/* FULL BACKGROUND */}
                        <div className='absolute inset-0'>

                            <Image
                                src='/slider_bg.png'
                                alt='SLIDER'
                                fill
                                priority
                                className='object-cover object-center scale-110 opacity-65'
                            />

                            {/* DARK OVERLAY */}
                            <div className='absolute inset-0 bg-black/51' />

                            {/* GLOW */}
                            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,224,56,0.10),transparent_45%)]' />

                            {/* GRID */}
                            <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100%_60px] opacity-10' />
                        </div>

                        {/* CONTENT */}
                        <div className='relative z-60 flex flex-col h-full p-8'>

                            {/* TOP */}
                            <div className='flex items-center justify-between'>

                                <Link
                                    href='/'
                                    className='relative flex items-center'
                                >
                                    <div className='relative w-28 h-7'>
                                        <Image
                                            src='/logo.png'
                                            alt='ARKATTIA'
                                            fill
                                            className='object-contain object-left'
                                        />
                                    </div>
                                </Link>

                                {/* CLOSE */}
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className='relative flex items-center justify-center w-11 h-11 rounded-md border border-white/10 bg-black/40 backdrop-blur-xl hover:border-[#ffe038]/30 transition-all duration-300'
                                >
                                    <span className='absolute w-5 h-px bg-white rotate-45' />

                                    <span className='absolute w-5 h-px bg-white -rotate-45' />
                                </button>
                            </div>

                            {/* NAVIGATION */}
                            <div className='flex flex-col gap-8 mt-20'>

                                <Link
                                    href='#'
                                    onClick={() => setSidebarOpen(false)}
                                    className='text-white/75 text-[13px] tracking-[0.25em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                >
                                    HOME
                                </Link>

                                {/* GAMES */}
                                <div className='space-y-5'>

                                    <button
                                        onClick={() => setMobileGamesOpen(!mobileGamesOpen)}
                                        className='flex items-center justify-between w-full text-white/75 text-[13px] tracking-[0.25em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                    >
                                        <span>GAMES</span>

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${mobileGamesOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${mobileGamesOpen
                                            ? 'max-h-75 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className='pl-5 flex flex-col gap-5 border-l border-white/10'>

                                            {[
                                                'PROJECT FUJIN',
                                                'GHOST HUNT',
                                                'ENTITY UNKNOWN',
                                            ].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href='#'
                                                    onClick={() => setSidebarOpen(false)}
                                                    className='text-white/45 text-[11px] tracking-[0.22em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href='#technology'
                                    onClick={() => setSidebarOpen(false)}
                                    className='text-white/75 text-[13px] tracking-[0.25em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                >
                                    TECHNOLOGY
                                </Link>

                                <Link
                                    href='#about'
                                    onClick={() => setSidebarOpen(false)}
                                    className='text-white/75 text-[13px] tracking-[0.25em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                >
                                    STUDIO
                                </Link>

                                <Link
                                    href='#community'
                                    onClick={() => setSidebarOpen(false)}
                                    className='text-white/75 text-[13px] tracking-[0.25em] uppercase hover:text-[#ffe038] transition-colors duration-300'
                                >
                                    COMMUNITY
                                </Link>
                            </div>

                            {/* CTA */}
                            <div className='mt-auto pt-10'>

                                <Link
                                    href='#community'
                                    className='group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/10 hover:text-[#ffe038]'
                                >
                                    <span className='relative z-10'>
                                        JOIN ARKATTIA
                                    </span>

                                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header