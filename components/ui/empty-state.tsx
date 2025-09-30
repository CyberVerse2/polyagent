"use client"

import React from 'react'

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string
  description?: string
  icon?: React.ReactNode
}) {
  return (
    <div className="text-center text-gray-500 my-8 border-2 border-black rounded-xl p-4 bg-white" style={{ boxShadow: "4px 4px 0px 0px #000000" }}>
      {icon && <div className="mx-auto mb-2 flex items-center justify-center">{icon}</div>}
      <p className="font-semibold text-black">{title}</p>
      {description && <p className="text-xs mt-1">{description}</p>}
    </div>
  )
}