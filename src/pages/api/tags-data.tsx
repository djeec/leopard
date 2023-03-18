import { getTags } from '@/lib/getTags';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  let data : string[];

  const query = req.query['q'];
  let q : string;

  q = Array.isArray(query) ? query[0] : query??"";

  data = await getTags(q);
  res.status(200).json(data)
}
