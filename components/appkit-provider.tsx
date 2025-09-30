"use client"

import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { wagmiConfig, projectId } from '@/lib/appkit/config'

const queryClient = new QueryClient()

if (typeof window !== 'undefined' && projectId) {
  createWeb3Modal({
    wagmiConfig,
    projectId,
    enableAnalytics: true,
    themeMode: 'light'
  })
}

export function AppKitProvider({ children }: { children: ReactNode }) {
  if (!projectId) {
    return <>{children}</>
  }
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

