'use client'

import { MoveUpRight, Cpu, Boxes, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Technology() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const [sliderPosition, setSliderPosition] = useState(50)

    const sliderRef = useRef<HTMLDivElement>(null)

    const isDragging = useRef(false)

    const updateSlider = (clientX: number) => {
        if (!sliderRef.current) return

        const rect = sliderRef.current.getBoundingClientRect()

        const position = ((clientX - rect.left) / rect.width) * 100

        setSliderPosition(Math.min(Math.max(position, 0), 100))
    }

    const handleMouseDown = () => {
        isDragging.current = true
    }

    const handleMouseUp = () => {
        isDragging.current = false
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return

        updateSlider(e.clientX)
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        updateSlider(e.clientX)
    }

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.tech-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                x: -80,
                duration: 1.2,
                ease: 'power3.out',
            })

            gsap.from('.tech-slider', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 51%',
                },

                opacity: 0,
                x: 80,
                duration: 1.2,
                ease: 'power3.out',
            })

        }, sectionRef)

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
            ctx.revert()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative w-full bg-transparent px-4 md:px-8 lg:px-12 py-12 overflow-hidden'
        >
            <div className='max-w-400 mx-auto'>

                <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]'>

                    {/* BACKGROUND EFFECTS */}
                    {/*  */}
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,224,56,0.08),transparent_35%)]' />

                    <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20' />

                    {/*  */}
                    <div className='grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 items-center p-6 md:p-10 lg:p-12'>

                        {/* LEFT */}
                        <div className='tech-content relative z-20 space-y-8'>

                            {/* LABEL */}
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-px bg-[#ffe038]' />

                                <div className='text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase text-white/50'>
                                    POWERED BY INNOVATION
                                </div>
                            </div>

                            {/* TITLE */}
                            <div className='space-y-5'>

                                <h2 className='text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[0.92] tracking-tighter font-semibold font-serif'>
                                    The Arkattia Engine
                                </h2>

                                <p className='text-white/55 text-[14px] md:text-[15px] leading-[1.9] max-w-140'>
                                    Our proprietary engine built on Unreal Engine 5 enables
                                    cinematic visual fidelity, immersive environments,
                                    atmospheric lighting, and advanced rendering systems
                                    designed for next-generation horror storytelling.
                                </p>
                            </div>

                            {/* FEATURES */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>

                                {[
                                    {
                                        icon: <Cpu size={18} />,
                                        title: 'Cinematic Visuals',
                                        desc: 'Film-quality rendering and advanced lighting systems.',
                                    },

                                    {
                                        icon: <Boxes size={18} />,
                                        title: 'Immersive Worlds',
                                        desc: 'Dense atmospheric environments built for exploration.',
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className='group relative overflow-hidden rounded-xl border border-white/10 bg-white/3 backdrop-blur-md p-5 transition-all duration-500 hover:border-[#ffe038]/20 hover:bg-[#ffe038]/3'
                                    >

                                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,224,56,0.08),transparent_60%)]' />

                                        <div className='relative z-10 space-y-4'>

                                            <div className='flex items-center justify-center w-11 h-11 rounded-lg bg-[#ffe038]/1 border border-[#ffe038]/10 text-[#ffe038]'>
                                                {item.icon}
                                            </div>

                                            <div className='space-y-2'>
                                                <h3 className='text-white text-[15px] font-semibold tracking-[-0.02em]'>
                                                    {item.title}
                                                </h3>

                                                <p className='text-white/45 text-[13px] leading-[1.7]'>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* BUTTON */}
                            <div className='pt-2'>
                                <Link
                                    href='#'
                                    className='group/link relative inline-flex items-center gap-3 border border-white/10 bg-black/30 backdrop-blur-md px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 transition-all duration-500 hover:border-[#ffe038]/40 hover:bg-[#ffe038]/1 hover:text-[#ffe038] hover:shadow-[0_0_11px_rgba(255,224,56,0.15)]'
                                >
                                    <span>EXPLORE TECHNOLOGY</span>

                                    <MoveUpRight
                                        size={16}
                                        className='transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1'
                                    />

                                    <div className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#ffe038]/5 via-transparent to-[#ffe038]/5 pointer-events-none' />
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className='tech-slider relative z-20'>

                            <div
                                ref={sliderRef}
                                className='relative h-105 md:h-125 overflow-hidden rounded-2xl border border-white/10 cursor-ew-resize select-none bg-black'
                                onClick={handleClick}
                            >

                                {/* FINAL RENDER */}
                                <Image
                                    src='/tech_render.png'
                                    alt='Render'
                                    fill
                                    className='object-cover'
                                />

                                {/* WIREFRAME */}
                                <div
                                    className='absolute inset-0 overflow-hidden'
                                    style={{
                                        width: `${sliderPosition}%`,
                                    }}
                                >
                                    <Image
                                        src='/tech_wire.png'
                                        alt='Wireframe'
                                        fill
                                        className='object-cover'
                                    />
                                </div>

                                {/* OVERLAY */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 z-1' />

                                {/* DIVIDER */}
                                <div
                                    className='absolute top-0 bottom-0 w-0.5 bg-white z-30'
                                    style={{
                                        left: `${sliderPosition}%`,
                                        transform: 'translateX(-50%)',
                                    }}
                                >

                                    {/* GLOW */}
                                    <div className='absolute inset-0 bg-white blur-sm opacity-60' />

                                    {/* HANDLE */}
                                    <button
                                        onMouseDown={handleMouseDown}
                                        className='absolute top-1/2 left-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300'
                                    >
                                        <div className='flex items-center gap-0.75'>
                                            <div className='w-0.5 h-4 bg-white/70 rounded-full' />
                                            <div className='w-0.5 h-4 bg-white/70 rounded-full' />
                                        </div>
                                    </button>
                                </div>

                                {/* LABELS */}
                                <div
                                    className='absolute bottom-5 left-5 z-10 text-[10px] tracking-[0.2em] uppercase text-white/70 bg-black/50 border border-white/10 backdrop-blur-md px-3 py-2 rounded-md transition-opacity duration-300'
                                    style={{
                                        opacity: sliderPosition < 40 ? 0 : 1,
                                    }}
                                >
                                    ENGINE VIEW
                                </div>

                                <div
                                    className='absolute bottom-5 right-5 z-10 text-[10px] tracking-[0.2em] uppercase text-white/70 bg-black/50 border border-white/10 backdrop-blur-md px-3 py-2 rounded-md transition-opacity duration-300'
                                    style={{
                                        opacity: sliderPosition > 60 ? 0 : 1,
                                    }}
                                >
                                    FINAL RENDER
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BORDER */}
                    <div className='absolute inset-0 rounded-2xl border border-white/5 pointer-events-none' />
                </div>
            </div>
        </section>
    )
}

export default Technology