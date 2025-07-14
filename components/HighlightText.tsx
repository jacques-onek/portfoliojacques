"use client"

'use client'
import { annotate } from 'rough-notation'
import { useEffect, useRef } from 'react'

type RoughHighlightProps = {
  type?: 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'bracket'
  color?: string
  padding?: number
  strokeWidth?: number
  animationDuration?: number
  show?: boolean
  children: React.ReactNode
}

export default function RoughHighlight({
  type = 'underline',
  color = '#facc15',
  padding = 5,
  strokeWidth = 2,
  animationDuration = 800,
  show = true,
  children,
}: RoughHighlightProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current || !show) return
    const annotation = annotate(ref.current, {
      type,
      color,
      padding,
      strokeWidth,
      animationDuration,
    })
    annotation.show()
  }, [type, color, padding, strokeWidth, animationDuration, show])

  return (
    <span ref={ref} className="inline-block">
      {children}
    </span>
  )
}
