'use client'

import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const games = [
    {
        title: 'RAVENHILL',
        status: 'DEMO COMING SOON',
        image: '/ghost_bg.png',
        description:
            'A short horror game for Android delivering a console-like horror experience on mobile devices.',
        color: 'bg-red-500/15 text-red-300 border-red-500/20',
    },

    {
        title: 'ENTITY UNKNOWN',
        status: 'DEMO COMING SOON',
        image: '/entity_bg.png',
        description:
            'A psychological horror experience where reality fractures and something ancient begins to emerge.',
        color: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
    },

    {
        title: 'PROJECT FUJIN',
        status: 'IN DEVELOPMENT',
        image: '/project_bg.png',
        description:
            'A supernatural horror experience set near Mount Fuji where dark forces linger within the forest.',
        color: 'bg-[#ffe038]/10 text-[#ffe038] border-[#ffe038]/20',
    },
]

function Games() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.games-heading', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            })

            gsap.from('.game-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 100,
                duration: 1.2,
                stagger: 0.18,
                ease: 'power3.out',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative w-full bg-transparent px-4 md:px-8 lg:px-12 py-14 overflow-hidden'
        >
            <div className='max-w-400 mx-auto'>

                {/* TOP */}
                <div className='games-heading flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10'>

                    <div className='space-y-4'>
                        <div className='text-white text-[28px] md:text-[38px] leading-[1.05] font-bold font-serif tracking-[-0.03em]'>
                            WORLDS IN DEVELOPMENT
                        </div>

                        <p className='text-white/45 text-[14px] md:text-[15px] max-w-162.5 leading-[1.8]'>
                            Explore our current projects and the worlds we’re bringing to life.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <Link
                        href='#'
                        className='group/link relative inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                    >
                        <span>VIEW ALL GAMES</span>

                        <MoveUpRight
                            size={16}
                            className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                        />

                        <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                    </Link>
                </div>

                {/* GRID */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>

                    {games.map((game, index) => (
                        <div
                            key={index}
                            className='game-card group relative overflow-hidden rounded-xl border border-white/10 bg-[#050505] min-h-100'
                        >

                            {/* IMAGE */}
                            <div className='relative h-67.5 overflow-hidden'>

                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    className='object-cover scale-100 group-hover:scale-105 transition-all duration-1000 ease-out'
                                />

                                {/* OVERLAYS */}
                                <div className='absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent z-1' />

                                <div className='absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/40 z-1' />

                                {/* STATUS */}
                                <div
                                    className={`absolute top-5 left-5 z-20 border px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold backdrop-blur-md ${game.color}`}
                                >
                                    {game.status}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className='relative z-20 flex flex-col justify-between p-7 min-h-fit'>

                                <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,224,56,0.14),transparent_40%)]' />

                                <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                                <div className='space-y-5'>

                                    <h2 className='text-white text-[34px] leading-[0.95] tracking-[-0.04em] font-semibold font-serif'>
                                        {game.title}
                                    </h2>

                                    <p className='text-white/55 text-[14px] leading-[1.8]'>
                                        {game.description}
                                    </p>
                                </div>

                                {/* LINK */}
                                <Link
                                    href='#community'
                                    className='group/btn mt-8 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/85 hover:text-[#ffe038] transition-all duration-300 w-fit'
                                >
                                    <span className='border-b border-white/10 pb-1 group-hover/btn:border-[#ffe038] transition-all duration-300'>
                                        EXPLORE MORE
                                    </span>

                                    <MoveUpRight
                                        size={15}
                                        className='transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'
                                    />
                                </Link>
                            </div>

                            {/* BORDER GLOW */}
                            <div className='absolute inset-0 rounded-xl border border-white/5 group-hover:border-[#ffe038]/20 transition-all duration-500 pointer-events-none z-2' />


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Games