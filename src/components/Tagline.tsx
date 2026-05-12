'use client'

import React from 'react'
import Link from 'next/link'

import {
    FaDiscord,
    FaXTwitter,
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa6'

function Tagline() {
    return (
        <section className='relative w-full bg-linear-to-b from-black via-black/80 to-transparent px-4 md:px-8 lg:px-12 overflow-hidden'>

            <div className='max-w-400 mx-auto'>

                <div className='relative overflow-hidden rounded-xl border border-white/10 bg-[#050505]'>

                    {/* BG EFFECT */}
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,224,56,0.04),transparent_60%)]' />

                    <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[g0px_60px] opacity-20' />

                    <div className='relative z-20 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between px-5 md:px-8 py-5'>

                        {/* LEFT */}
                        <div className='flex flex-wrap items-center gap-4 text-sm'>

                            <div className='px-3 py-1 rounded-full border border-[#ffe038]/20 bg-[#ffe038]/10 text-[#ffe038] text-[10px] font-semibold tracking-[0.22em] uppercase'>
                                Latest
                            </div>

                            <div className='hidden md:block w-px h-4 bg-white/10' />

                            <p className='text-white/55 text-[13px] md:text-[14px] tracking-[0.01em] leading-[1.7]'>
                                We’re building something special. Ghost Hunt reveal coming soon.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className='xl:flex flex-wrap items-center gap-4 hidden'>

                            <div className='text-[10px] font-semibold tracking-[0.22em] uppercase text-white/40'>
                                Follow Our Journey
                            </div>

                            <div className='hidden md:block w-px h-4 bg-white/10' />

                            {/* SOCIALS */}
                            <div className='flex items-center gap-2'>

                                {[
                                    {
                                        icon: <FaDiscord size={13} />,
                                        href: '#',
                                    },

                                    {
                                        icon: <FaXTwitter size={12} />,
                                        href: '#',
                                    },

                                    {
                                        icon: <FaYoutube size={13} />,
                                        href: '#',
                                    },

                                    {
                                        icon: <FaInstagram size={13} />,
                                        href: '#',
                                    },
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className='group relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/2 backdrop-blur-md text-white/50 transition-all duration-300 hover:border-[#ffe038]/30 hover:bg-[#ffe038]/10 hover:text-[#ffe038]'
                                    >
                                        {item.icon}

                                        <div className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle,rgba(255,224,56,0.15),transparent_70%)]' />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BORDER */}
                    <div className='absolute inset-0 rounded-xl border border-white/5 pointer-events-none' />
                </div>
            </div>
        </section>
    )
}

export default Tagline