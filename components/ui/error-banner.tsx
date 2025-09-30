"use client"

import React from 'react'

export function ErrorBanner({ title, message }: { title?: string; message?: string }) {
  return (
    <div className="w-full max-w-md mx-auto mb-4 p-3 border-2 border-black bg-red-50 rounded-xl" style={{ boxShadow: '4px 4px 0px 0px #000000' }}>
      <div className="text-sm font-bold text-red-700">{title || 'Error'}</div>
      {message && <div className="text-xs text-red-600 mt-1">{message}</div>}
    </div>
  )}