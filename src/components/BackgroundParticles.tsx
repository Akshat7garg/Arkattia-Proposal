'use client'

import React from 'react'

function BackgroundParticles() {
    return (
        <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>

            {/* FIRE / EMBER PARTICLES */}
            {[...Array(25)].map((_, i) => (
                <span
                    key={i}
                    className='absolute -bottom-5 animate-floatFire rounded-full bg-[#ffe038]/70 blur-[2px]'
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        animationDuration: `${Math.random() * 10 + 8}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random() * 0.6 + 0.2,
                    }}
                />
            ))}

            {/* DARK ATMOSPHERIC GLOW */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,120,0,0.06),transparent_40%)]' />
        </div>
    )
}

export default BackgroundParticles