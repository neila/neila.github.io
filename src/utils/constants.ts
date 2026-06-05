export const walletAddress = {
  bitcoin: process.env.NEXT_PUBLIC_BTC,
  ethereum: process.env.NEXT_PUBLIC_ETH,
  monero: process.env.NEXT_PUBLIC_XMR,
} as const;
