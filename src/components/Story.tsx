'use client'

import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Story() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.story-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 69%',
                },

                opacity: 0,
                y: 120,
                duration: 1.3,
                ease: 'power3.out',
            })

            gsap.from('.story-content > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 69%',
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
            className='relative w-full bg-transparent px-4 md:px-8 lg:px-12 py-8 overflow-hidden'
        >
            <div className='max-w-400 mx-auto'>

                <div className='story-card group relative overflow-hidden rounded-lg border border-white/10 bg-[#050505] min-h-105 md:min-h-90'>

                    {/* BG IMAGE */}
                    <div className='absolute inset-0'>
                        <Image
                            src='/story_bg.png'
                            alt='Story'
                            fill
                            priority
                            className='object-cover opacity-80 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out'
                        />
                    </div>

                    {/* CINEMATIC OVERLAYS */}
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-black/36 to-black/95 z-1' />

                    <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/24 z-1' />

                    {/* LIGHT GLOW */}
                    <div className='absolute top-0 right-[20%] w-100 h-100 bg-white/10 blur-[120px] rounded-full z-1' />

                    {/* CONTENT */}
                    <div className='story-content relative z-20 flex items-center justify-end h-full p-8 md:p-14'>

                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,224,56,0.14),transparent_40%)]' />

                        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />


                        <div className='max-w-105 space-y-5'>

                            <div className='text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase text-white/50'>
                                IMMERSIVE WORLDS
                            </div>

                            <h2 className='text-white text-[34px] md:text-[52px] leading-[0.95] tracking-[-0.04em] font-bold font-serif'>
                                Stories that stay with you.
                            </h2>

                            <p className='text-white/60 text-[14px] md:text-[15px] leading-[1.8] max-w-95'>
                                We create atmospheric worlds filled with mystery,
                                tension, and discovery.
                            </p>

                            {/* BUTTON */}
                            <Link
                                href='#about'
                                className='group/link relative inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                            >
                                <span>LEARN MORE</span>

                                <MoveUpRight
                                    size={16}
                                    className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                                />

                                <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                            </Link>

                        </div>
                    </div>

                    {/* BORDER GLOW */}
                    <div className='absolute inset-0 rounded-lg border border-white/5 group-hover:border-[#ffe038]/20 transition-all duration-500 z-2' />
                </div>
            </div>
        </section>
    )
}

export default Story