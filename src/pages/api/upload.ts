import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Placeholder: store uploaded file to disk
  res.status(200).json({ success: true });
}
