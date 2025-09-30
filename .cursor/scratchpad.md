Background and Motivation

We want to integrate Reown AppKit (Web3Modal) into this Next.js app to enable best-in-class wallet connection UX (including 500+ wallets, social/email via AppKit if desired), on-ramp, and standardized hooks for EVM interactions (via wagmi/viem). The current app uses Privy for authentication and an embedded wallet, plus a server wallet flow for AI actions. AppKit should augment UX for external/self-custody wallets without breaking existing Privy auth and server wallet flows.

Key Challenges and Analysis

- Privy coexistence: Keep Privy auth/session and embedded wallet intact. AppKit should be additive, not a replacement. The UI should clearly show which wallet/address is in use for balances.
- Address source of truth: Today balances derive from Privy’s embedded wallet address. With AppKit, prefer the AppKit-connected address when present; otherwise fall back to Privy’s embedded wallet.
- SSR considerations: Wagmi + Next app router can require cookie-based SSR state. To minimize changes, we can start without SSR initial state; if hydration issues arise, we’ll add `cookieToInitialState` in `app/layout.tsx`.
- Chains: App largely targets Base (8453). Configure wagmi chains for Base and optionally Base Sepolia.
- Minimal UI impact: Place `<w3m-button />` in the sidebar while keeping the existing “Sign In” via Privy. Do not disrupt Chat, Supabase sync, or server wallet flow.
- Package compatibility: React 19/Next 15 with wagmi/@web3modal/wagmi. Monitor for peer dep warnings; if needed, pin compatible versions.

High-level Task Breakdown

1. Install dependencies

   - Add: `@web3modal/wagmi`, `wagmi`, `@tanstack/react-query` (viem already present)
   - Success criteria: Packages installed without peer dependency errors.

2. Create AppKit wagmi config

   - File: `lib/appkit/config.ts`
   - Use `defaultWagmiConfig` with chains `[base, baseSepolia]`, `projectId` from `NEXT_PUBLIC_PROJECT_ID`, metadata, and no SSR initially.
   - Success criteria: The config compiles and exports `config` and `projectId`.

3. Create Web3Modal provider

   - File: `components/appkit-provider.tsx`
   - Initialize `createWeb3Modal({ wagmiConfig, projectId, enableAnalytics: true, themeMode: 'light' })`.
   - Wrap children with `WagmiProvider` and `QueryClientProvider`.
   - Success criteria: App builds; provider mounts client-side without runtime errors.

4. Wire provider into app

   - Update `app/providers.tsx` to include `AppKitProvider` around existing children (inside PrivyProvider to keep auth/global context intact).
   - Success criteria: App compiles; Privy flows unchanged; no hydration mismatch.

5. Add connect button to UI

   - Update `app/client-layout.tsx` Sidebar bottom actions: render `<w3m-button />` near Sign In/Export Wallet. Show only on client.
   - Success criteria: Button appears; clicking opens AppKit modal; can connect a wallet.

6. Prefer AppKit address in balances (non-breaking)

   - In `app/client-layout.tsx`, read `useAccount()` from wagmi. If connected via AppKit, pass that address down to tokens/activity; else fall back to Privy’s embedded wallet.
   - Success criteria: Balances reflect AppKit-connected wallet when connected; otherwise unchanged.

7. Environment and docs

   - Add `NEXT_PUBLIC_PROJECT_ID` to `README.md` and `.env.example` (if present); include notes in `SUPABASE_SETUP.md` or a new section.
   - Success criteria: Clear instructions for setting Project ID.

8. Optional SSR enhancement (only if needed)
   - If we see hydration/cookie warnings, add `cookieToInitialState(config, headers().get('cookie'))` and pass into AppKitProvider.
   - Success criteria: No hydration warnings in console.

Project Status Board

- [ ] Install Reown AppKit deps
- [ ] Create `lib/appkit/config.ts`
- [ ] Add `components/appkit-provider.tsx`
- [ ] Wrap `AppKitProvider` inside `app/providers.tsx`
- [ ] Add `<w3m-button />` to `app/client-layout.tsx`
- [ ] Prefer AppKit address in balances when connected
- [ ] Document `NEXT_PUBLIC_PROJECT_ID` in `README.md`
- [ ] (If needed) Add SSR initial state wiring

Current Status / Progress Tracking

- Planner created the integration plan and task list. Awaiting Executor to implement step-by-step with commits after >2 files changed per instruction.

Executor's Feedback or Assistance Requests

- Please provide `NEXT_PUBLIC_PROJECT_ID` from Reown Dashboard for local testing and deployment.
- Confirm EVM focus (Base chain). If Solana support is desired now, we will add `@reown/appkit` Solana adapter in a follow-up.

Lessons

- Keep Privy auth/session and server wallet flows intact; AppKit augments client wallet UX only.
- Start without SSR cookie state; add only if hydration warnings appear.
