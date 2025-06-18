import type { NextApiRequest, NextApiResponse } from 'next';
import { extractDominantColors } from '../../utils/colorUtils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imagePath, n = 8 } = req.body;
  try {
    const palette = await extractDominantColors(imagePath, Number(n));
    res.status(200).json({ palette });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
