"use client"

import React from 'react'

export function ConnectionIndicator({ connected }: { connected: boolean }) {
  const color = connected ? 'bg-green-500' : 'bg-red-500'
  const label = connected ? 'Connected' : 'Disconnected'
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}