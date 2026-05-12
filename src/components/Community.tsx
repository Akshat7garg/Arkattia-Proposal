'use client'

import { MoveUpRight } from 'lucide-react'

import {
    FaDiscord,
    FaXTwitter,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Community() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.community-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 120,
                duration: 1.3,
                ease: 'power3.out',
            })

            gsap.from('.community-content > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                y: 35,
                duration: 0.9,
                stagger: 0.12,
                delay: 0.25,
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
            <div className='max-w-400 mx-auto'>

                <div className='community-card group relative overflow-hidden rounded-xl border border-white/10 bg-[#050505] min-h-80'>

                    {/* BG IMAGE */}
                    <div className='absolute inset-0'>
                        <Image
                            src='/community_bg.png'
                            alt='Community'
                            fill
                            priority
                            className='object-cover scale-100 opacity-80 group-hover:scale-105 transition-all duration-1600 ease-out'
                        />
                    </div>

                    {/* OVERLAYS */}
                    <div className='absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent z-1' />

                    <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/11 z-1' />

                    {/* CONTENT */}
                    <div className='community-content relative z-20 flex items-center h-full p-8 md:p-14'>

                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,224,56,0.08),transparent_35%)]' />

                    <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                        <div className='max-w-130 space-y-6'>

                            {/* LABEL */}
                            <div className='text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase text-white/50'>
                                JOIN THE ARKATTIA COMMUNITY
                            </div>

                            {/* TITLE */}
                            <h2 className='text-white text-[34px] md:text-[52px] leading-[0.95] tracking-[-0.04em] font-semibold font-serif'>
                                Step deeper into the unknown.
                            </h2>

                            {/* DESC */}
                            <p className='text-white/55 text-[14px] md:text-[15px] leading-[1.8] max-w-115'>
                                Follow our journey, get early updates, and be part
                                of a community that lives for story, atmosphere,
                                and unforgettable worlds.
                            </p>

                            {/* ACTIONS */}
                            <div className='flex flex-wrap items-center gap-5 pt-2'>

                                {/* BUTTON */}
                                <Link
                                    href='#'
                                    className='group/link relative inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                                >
                                    <span>JOIN COMMUNITY</span>

                                    <MoveUpRight
                                        size={16}
                                        className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                                    />

                                    <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                                </Link>

                                {/* SOCIALS */}
                                <div className='flex items-center gap-4 text-white/55'>

                                    {[
                                        <FaDiscord size={15} />,
                                        <FaXTwitter size={14} />,
                                        <FaYoutube size={15} />,
                                        <FaInstagram size={15} />
                                    ].map((icon, index) => (
                                        <Link
                                            key={index}
                                            href='#'
                                            className='group/social relative flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:border-[#ffe038]/30 hover:bg-[#ffe038]/1 transition-all duration-300'
                                        >
                                            <span className='group-hover/social:text-[#ffe038] transition-colors duration-300'>
                                                {icon}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BORDER GLOW */}
                    <div className='absolute inset-0 rounded-xl border border-white/5 group-hover:border-[#ffe038]/20 transition-all duration-500 pointer-events-none z-2' />
                </div>
            </div>
        </section>
    )
}

export default Community