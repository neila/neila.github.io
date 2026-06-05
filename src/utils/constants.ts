export const walletAddress = {
  bitcoin: process.env.NEXT_PUBLIC_BTC,
  ethereum: process.env.NEXT_PUBLIC_ETH,
  monero: process.env.NEXT_PUBLIC_XMR,
} as const;

export const contactAddresses = {
  email: process.env.NEXT_PUBLIC_EMAIL,
  matrix: process.env.NEXT_PUBLIC_MATRIX,
  session: process.env.NEXT_PUBLIC_SESSION,
  simplex: process.env.NEXT_PUBLIC_SIMPLEX,
  xmpp: process.env.NEXT_PUBLIC_XMPP,
} as const;
