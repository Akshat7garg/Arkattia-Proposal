'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='relative w-full bg-black px-4 md:px-8 lg:px-12 pb-6 overflow-hidden'>

            <div className='max-w-400 mx-auto'>

                <div className='relative overflow-hidden border-t border-white/10'>

                    {/* BG EFFECT */}
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,224,56,0.03),transparent_60%)]' />

                    <div className='relative z-20 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between py-6'>

                        {/* LEFT */}
                        <div className='flex flex-col justify-center md:flex-row items-center gap-5 md:gap-8'>

                            {/* LOGO */}
                            <Link
                                href='/'
                                className='flex items-center gap-3 w-fit group'
                            >
                                <div className='relative w-30 h-15'>
                                    <Image
                                        src='/logo.png'
                                        alt='Arkattia'
                                        fill
                                        className='object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                                    />
                                </div>
                            </Link>

                            {/* COPYRIGHT */}
                            <p className='text-white/35 text-[11px] tracking-[0.08em] uppercase'>
                                © 2026 Arkattia Studio. All rights reserved.
                            </p>
                        </div>

                        {/* CENTER */}
                        <div className='flex flex-wrap justify-center items-center gap-4'>

                            {[
                                'Privacy Policy',
                                'Terms Of Use',
                                'Press Kit',
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href='#'
                                    className='text-white/45 text-[10px] tracking-[0.22em] uppercase transition-all duration-300 hover:text-[#ffe038]'
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* RIGHT */}
                        <div className='flex items-center justify-center gap-4'>

                            <p className='text-white/30 text-[10px] tracking-[0.22em] uppercase'>
                                Built With Passion. Driven By Stories.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM LINE */}
                    <div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/10 to-transparent' />
                </div>
            </div>
        </footer>
    )
}

export default Footer