import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    default: {
      let ip = req.headers["x-real-ip"] as string;
      const forwardedFor = req.headers["x-forwarded-for"] as string;
      if (!ip && forwardedFor) {
        ip = forwardedFor?.split(",").at(0) ?? "Unknown";
      }

      res
        .status(405)
        .end(`Method ${req.method} Not Allowed. Your IP was flagged: ${ip}`);
    }
  }
}
