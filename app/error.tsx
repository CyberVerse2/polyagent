'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button' // Assuming Button component path
import { ErrorBanner } from '@/components/ui/error-banner'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled Error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <ErrorBanner title="Something went wrong" message={error.message || 'An unexpected error occurred.'} />
      <Button
        onClick={() => reset()} // Attempt to recover by re-rendering the segment
        variant="destructive"
      >
        Try again
      </Button>
    </div>
  )
}
