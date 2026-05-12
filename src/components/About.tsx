'use client'

import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 120,
                duration: 1.3,
                stagger: 0.2,
                ease: 'power3.out',
            })

            gsap.from('.about-content > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 35,
                duration: 0.9,
                stagger: 0.12,
                delay: 0.3,
                ease: 'power2.out',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative w-full bg-transparent px-4 md:px-8 lg:px-12 py-12 overflow-hidden'
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-400 mx-auto'>

                {/* WHAT WE CREATE */}
                <div
                    className='about-card group relative min-h-105 md:min-h-90 overflow-hidden rounded-lg border border-white/10 bg-[#050505]'
                >
                    {/* BG IMAGE */}
                    <div className='absolute inset-0'>
                        <Image
                            src='/what_bg.png'
                            alt='What We Create'
                            fill
                            className='object-cover opacity-55 scale-100 group-hover:scale-105 transition-all duration-700 ease-out'
                        />
                    </div>

                    {/* OVERLAYS */}
                    <div className='absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent z-5' />
                    <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/6 z-5' />

                    {/* CONTENT */}
                    <div className='about-content relative z-20 flex flex-col justify-between h-full p-7 md:p-10'>

                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,224,56,0.14),transparent_40%)]' />

                        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                        <div className='space-y-5 max-w-130'>
                            <div className='font-semibold flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.28em] text-white/55 uppercase'>
                                <div className='w-2 h-2 rounded-full border border-[#ffe038]' />
                                WHAT WE CREATE
                            </div>

                            <h2 className='text-white text-[28px] md:text-[38px] leading-[1.05] font-bold font-serif tracking-[-0.03em] max-w-125'>
                                Atmospheric. Narrative. Unforgettable.
                            </h2>

                            <p className='text-white/55 text-[13px] md:text-[14px] leading-[1.8] max-w-130'>
                                Our experiences are built around immersive
                                worlds, environmental storytelling, and
                                carefully crafted tension. We focus on creating
                                environments that feel alive and unsettling,
                                where discovery is driven by curiosity and
                                every step forward reveals something deeper.
                            </p>

                            <Link
                                href='#community'
                                className='group/link relative z-30 inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                            >
                                <span>OUR APPROACH</span>

                                <MoveUpRight
                                    size={16}
                                    className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                                />

                                {/* glow */}
                                <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                            </Link>
                        </div>
                    </div>

                    {/* BORDER GLOW */}
                    <div className='absolute inset-0 rounded-lg border border-white/5 group-hover:border-[#ffe038]/20 transition-all duration-500' />
                </div>

                {/* ABOUT ARKATTIA */}
                <div
                    className='about-card group relative min-h-105 md:min-h-90 overflow-hidden rounded-lg border border-white/10 bg-[#050505]'
                >
                    {/* BG IMAGE */}
                    <div className='absolute inset-0'>
                        <Image
                            src='/about_bg.png'
                            alt='About Arkattia'
                            fill
                            className='object-cover opacity-55 scale-100 group-hover:scale-105 transition-all duration-700 ease-out'
                        />
                    </div>

                    {/* OVERLAYS */}
                    <div className='absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent z-5' />
                    <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/6 z-5' />

                    {/* CONTENT */}
                    <div className='about-content relative z-20 flex flex-col justify-between h-full p-7 md:p-10'>

                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,224,56,0.14),transparent_40%)]' />

                        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                        <div className='space-y-5 max-w-130'>
                            <div className='flex items-center gap-2 text-[10px] md:text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase'>
                                <div className='w-2 h-2 rounded-full border border-[#ffe038]' />
                                ABOUT ARKATTIA
                            </div>

                            <h2 className='text-white text-[28px] md:text-[38px] leading-[1.05] font-bold font-serif tracking-[-0.03em] max-w-125'>
                                A studio built on experience and vision.
                            </h2>

                            <p className='text-white/55 text-[13px] md:text-[14px] leading-[1.8] max-w-130'>
                                The studio was created with a simple goal:
                                to craft immersive experiences where narrative,
                                atmosphere, and gameplay merge into a single
                                cohesive journey. By combining industry-level
                                experience with creative independence,
                                Arkattia focuses on building worlds that players
                                don’t simply play.. but truly experience.
                            </p>

                            <Link
                                href='#community'
                                className='group/link relative z-30 inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                            >
                                <span>OUR STORY</span>

                                <MoveUpRight
                                    size={16}
                                    className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                                />

                                {/* glow */}
                                <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                            </Link>
                        </div>
                    </div>

                    {/* BORDER GLOW */}
                    <div className='absolute inset-0 rounded-lg border border-white/5 group-hover:border-[#ffe038]/20 transition-all duration-500' />
                </div>
            </div>
        </section>
    )
}

export default About