'use client'

import { CirclePlay, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'

function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            // INITIAL STATES
            gsap.set('.hero-bg', {
                scale: 1.08,
                opacity: 0,
            })

            gsap.set('.hero-overlay', {
                opacity: 0,
            })

            gsap.set('.hero-badge-line', {
                width: 0,
                opacity: 0,
            })

            gsap.set('.hero-badge-text', {
                y: 20,
                opacity: 0,
            })

            gsap.set('.hero-title-1', {
                y: 120,
                opacity: 0,
            })

            gsap.set('.hero-title-2', {
                y: 120,
                opacity: 0,
            })

            gsap.set('.hero-description', {
                y: 40,
                opacity: 0,
            })

            gsap.set('.hero-buttons', {
                y: 40,
                opacity: 0,
            })

            // TIMELINE
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            })

            tl.to('.hero-bg', {
                scale: 1.03,
                opacity: 1,
                duration: 1.8,
            })

                .to(
                    '.hero-overlay',
                    {
                        opacity: 1,
                        duration: 1.2,
                    },
                    '-=1.4'
                )

                .to(
                    '.hero-badge-line',
                    {
                        width: 40,
                        opacity: 1,
                        duration: 0.7,
                    },
                    '-=0.8'
                )

                .to(
                    '.hero-badge-text',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                    },
                    '-=0.5'
                )

                .to(
                    '.hero-title-1',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                    },
                    '-=0.3'
                )

                .to(
                    '.hero-title-2',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                    },
                    '-=0.75'
                )

                .to(
                    '.hero-description',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                    },
                    '-=0.55'
                )

                .to(
                    '.hero-buttons',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                    },
                    '-=0.55'
                )

            // FLOATING BACKGROUND
            gsap.to('.hero-bg', {
                y: 20,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })

        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className='relative h-screen min-h-212.5 w-full overflow-hidden bg-black text-white'
        >

            {/* BACKGROUND */}
            <div className='absolute inset-0'>

                <Image
                    src='/hero_bg.png'
                    alt='Hero'
                    fill
                    priority
                    className='hero-bg object-cover object-center'
                />

                {/* OVERLAYS */}
                <div className='hero-overlay absolute inset-0 bg-black/45' />

                <div className='hero-overlay absolute inset-0 bg-linear-to-r from-black via-black/35 to-transparent' />

                <div className='hero-overlay absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-black via-black/80 to-transparent' />

                {/* GLOW */}
                <div className='hero-overlay absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,224,56,0.08),transparent_35%)]' />

                {/* GRID */}
                {/* <div className='hero-overlay absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15' /> */}
            </div>

            {/* CONTENT */}
            <div className='relative z-20 flex items-center justify-center h-full'>

                <div className='w-full px-5 md:px-10 lg:px-16 xl:px-24'>

                    <div className='max-w-full'>

                        {/* BADGE */}
                        <div className='mb-7 flex items-center gap-3 overflow-hidden'>

                            <div className='hero-badge-line h-px bg-[#ffe038]' />

                            <div className='hero-badge-text text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/55 font-semibold'>
                                Independent Game Studio
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className='space-y-1 leading-[0.9] font-semibold tracking-tighter font-serif overflow-hidden'>

                            <div className='overflow-hidden'>
                                <div className='hero-title-1 text-3xl md:text-5xl xl:text-7xl'>
                                    Immersive Worlds.
                                </div>
                            </div>

                            <div className='overflow-hidden'>
                                <div className='hero-title-2 text-3xl md:text-5xl xl:text-7xl'>
                                    Unforgettable{' '}
                                    <span className='text-[#ffe038]'>
                                        Stories.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className='mt-8 space-y-5 overflow-hidden'>

                            <p className='hero-description max-w-2xl text-[14px] md:text-[15px] leading-[1.9] text-white/60'>
                                Arkattia is an independent game studio founded
                                by ex-AAA developers with experience on globally
                                recognized franchises such as Call of Duty.
                                Our mission is to craft atmospheric,
                                narrative-driven games that draw players into
                                worlds where mystery, tension, and discovery
                                shape every moment.
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className='hero-buttons mt-10 flex flex-wrap items-center gap-4 font-semibold'>

                            {/* PRIMARY */}
                            <Link
                                href='#games'
                                className='group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-[#ffe038]/30 bg-[#ffe038]/10 backdrop-blur-md px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-500 hover:border-[#ffe038] hover:bg-[#ffe038] hover:text-black hover:shadow-[0_0_40px_rgba(255,224,56,0.25)]'
                            >

                                <span className='relative z-10'>
                                    Explore Worlds
                                </span>

                                <MoveUpRight
                                    size={17}
                                    className='relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                                />
                            </Link>

                            {/* SECONDARY */}
                            <Link
                                href='#games'
                                className='group relative inline-flex items-center gap-3 rounded-md border border-white/10 bg-black/30 backdrop-blur-md px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85 transition-all duration-500 hover:border-white/20 hover:bg-white/5 hover:text-white'
                            >

                                <CirclePlay
                                    size={18}
                                    className='relative z-10 transition-transform duration-300 group-hover:scale-110'
                                />

                                <span className='relative z-10'>
                                    Watch Trailer
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM FADE */}
            <div className='absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-20' />
        </section>
    )
}

export default Hero