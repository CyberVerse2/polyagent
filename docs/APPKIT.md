# Reown AppKit Integration

This app integrates Reown AppKit (Web3Modal + wagmi) to provide best-in-class wallet UX alongside Privy authentication.

## Requirements

- Reown Project ID from `https://dashboard.reown.com`
- Set `NEXT_PUBLIC_PROJECT_ID` in your `.env.local`

## Configuration

- AppKit wagmi config: `lib/appkit/config.ts`
- Provider wrapper: `components/appkit-provider.tsx`
- Provider wired in: `app/providers.tsx`
- Connect button: rendered in `app/client-layout.tsx`

## Supported Chains

- Base mainnet (8453)
- Base Sepolia (testing)

## Notes

- If no `NEXT_PUBLIC_PROJECT_ID` is set, the provider safely no-ops.
- AppKit-connected address is preferred for balances; otherwise falls back to Privy embedded wallet.