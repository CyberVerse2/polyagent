import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  // Do not throw here to avoid breaking builds without env; runtime guard in provider
  // console.warn can be noisy in CI; keep minimal
}

const metadata = {
  name: 'Text Wallet',
  description: 'Your conversational DeFi assistant',
  url: '',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [base, baseSepolia] as const

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: projectId || 'missing-project-id',
  metadata,
  ssr: false,
  storage: createStorage({
    storage: cookieStorage
  })
})

