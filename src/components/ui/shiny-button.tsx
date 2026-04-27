'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export default function ShinyButton({
  className,
  children = 'Shiny Day',
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={cn(
        'h-12 w-max rounded-sm border-none bg-[linear-gradient(325deg,#0044ff_0%,#2ccfff_55%,#0044ff_90%)] [background-size:280%_auto] px-6 py-2 font-medium text-white shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)] transition-[background-position] duration-700 hover:[background-position:right_top] focus:outline-none focus-visible:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-white',
        className
      )}
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}
