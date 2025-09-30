"use client"

import React from 'react'

export function Spinner({ size = 16 }: { size?: number }) {
  const border = Math.max(2, Math.floor(size / 8))
  return (
    <div
      aria-label="Loading"
      className="animate-spin rounded-full border-2 border-black/20 border-t-black"
      style={{ width: size, height: size, borderWidth: border }}
    />
  )
}