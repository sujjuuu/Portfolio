"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTilesProps {
  rows?: number
  cols?: number
  tileSize?: number
  imageUrl?: string
  images?: string[]
  cycleInterval?: number
  backgroundColor?: string
  className?: string
}

const maxOpacities = [
  [0.0, 0.2, 0.4, 0.6, 0.6, 0.4, 0.2, 0.0],
  [0.2, 0.4, 0.8, 1.0, 1.0, 0.6, 0.4, 0.2],
  [0.2, 0.4, 1.0, 1.0, 1.0, 0.8, 0.6, 0.2],
  [0.2, 0.6, 1.0, 1.0, 1.0, 1.0, 0.6, 0.2],
  [0.2, 0.6, 1.0, 1.0, 1.0, 1.0, 0.6, 0.2],
  [0.2, 0.6, 1.0, 1.0, 1.0, 1.0, 0.6, 0.2],
  [0.2, 0.4, 0.8, 1.0, 1.0, 0.8, 0.6, 0.2],
  [0.2, 0.4, 0.6, 0.8, 0.8, 0.6, 0.4, 0.1],
  [0.1, 0.2, 0.4, 0.4, 0.4, 0.4, 0.2, 0.1],
  [0.0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1],
  [0.0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.0, 0.0],
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
]

function TileGrid({
  rows,
  cols,
  tileSize,
  imageUrl,
}: {
  rows: number
  cols: number
  tileSize: number
  imageUrl: string
}) {
  const tilesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tilesRef.current) return

    const tiles: HTMLDivElement[] = []
    tilesRef.current.innerHTML = ""

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tile = document.createElement("div")
        tile.style.width = `${tileSize}px`
        tile.style.height = `${tileSize}px`
        tile.style.backgroundImage = `url(${imageUrl})`
        tile.style.backgroundPosition = `${-col * tileSize}px ${-row * tileSize}px`
        tile.style.backgroundSize = `${cols * tileSize}px ${rows * tileSize}px`
        tile.style.float = "left"
        tiles.push(tile)
        tilesRef.current.appendChild(tile)
      }
    }

    const animationFrames: number[] = []
    const startTimes: number[] = []

    tiles.forEach((tile, i) => {
      const row = Math.floor(i / cols)
      const col = i % cols
      const variance = 0.4
      const maxOpacity = maxOpacities[row]?.[col] ?? 0
      const minOpacity = Math.max(0, maxOpacity - variance)
      const duration = Math.random() * 0.25 + 0.75

      if (maxOpacity === 0) {
        tile.style.opacity = "0"
        return
      }

      startTimes[i] = Math.random() * duration
      let startTime: number | null = null

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = (elapsed + startTimes[i]) % (duration * 2)
        const normalizedProgress =
          progress < duration ? progress / duration : (duration * 2 - progress) / duration
        const opacity = minOpacity + (maxOpacity - minOpacity) * normalizedProgress
        tile.style.opacity = Math.max(minOpacity, Math.min(maxOpacity, opacity)).toString()
        animationFrames[i] = requestAnimationFrame(animate)
      }

      animationFrames[i] = requestAnimationFrame(animate)
    })

    return () => {
      animationFrames.forEach((id) => cancelAnimationFrame(id))
    }
  }, [rows, cols, tileSize, imageUrl])

  return (
    <div
      ref={tilesRef}
      style={{
        width: `${cols * tileSize}px`,
        height: `${rows * tileSize}px`,
        position: "relative",
        overflow: "hidden",
      }}
    />
  )
}

export function AnimatedTiles({
  rows = 12,
  cols = 8,
  tileSize = 50,
  imageUrl = "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/ai.jpg",
  images,
  cycleInterval = 3500,
  backgroundColor = "transparent",
  className,
}: AnimatedTilesProps) {
  const imageList = images && images.length > 0 ? images : [imageUrl]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (imageList.length <= 1) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % imageList.length)
    }, cycleInterval)
    return () => clearInterval(id)
  }, [imageList.length, cycleInterval])

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{
        backgroundColor,
        width: `${cols * tileSize}px`,
        height: `${rows * tileSize}px`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <TileGrid
            rows={rows}
            cols={cols}
            tileSize={tileSize}
            imageUrl={imageList[currentIndex]}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
