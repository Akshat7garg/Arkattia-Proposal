'use client'

import React, { useEffect } from 'react'

function MagicCursor() {
    useEffect(() => {
        const createStar = (x: number, y: number) => {

            for (let i = 0; i < 3; i++) {

                const star = document.createElement('div')

                star.className = 'magic-star'

                const offsetX = (Math.random() - 0.5) * 18
                const offsetY = (Math.random() - 0.5) * 18

                star.style.left = `${x + offsetX}px`
                star.style.top = `${y + offsetY}px`

                const size = Math.random() * 10 + 6

                star.style.width = `${size}px`
                star.style.height = `${size}px`

                star.style.animationDuration = `${Math.random() * 1 + 1.5}s`

                document.body.appendChild(star)

                setTimeout(() => {
                    star.remove()
                }, 5000)
            }
        }

        let lastX = 0
        let lastY = 0

        const handleMove = (e: MouseEvent) => {
            const distance = Math.hypot(
                e.clientX - lastX,
                e.clientY - lastY
            )

            if (distance > 2) {
                createStar(e.clientX, e.clientY)

                lastX = e.clientX
                lastY = e.clientY
            }
        }

        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return null
}

export default MagicCursor