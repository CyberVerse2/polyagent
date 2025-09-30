import { Network } from 'alchemy-sdk'

export type NativeNetwork = {
  name: string
  network: Network
  logo: string
  symbol: string
}

export const NATIVE_NETWORKS: NativeNetwork[] = [
  { name: 'Ethereum', network: Network.ETH_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/ethereum.svg', symbol: 'ETH' },
  { name: 'Optimism', network: Network.OPT_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/optimism.svg', symbol: 'ETH' },
  { name: 'Arbitrum One', network: Network.ARB_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/arbitrum.svg', symbol: 'ETH' },
  { name: 'Polygon PoS', network: Network.MATIC_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg', symbol: 'MATIC' },
  { name: 'Base', network: Network.BASE_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/base.svg', symbol: 'ETH' },
  { name: 'Zora', network: Network.ZORA_MAINNET, logo: 'https://token.metaswap.codefi.network/assets/networkLogos/zora.svg', symbol: 'ETH' },
]