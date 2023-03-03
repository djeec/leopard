import { ForecastData } from '@/types/forecastTypes'

import { getForecastBySlug } from "@/lib/getForecasts";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastData>
) {
  let authorId = '100';
  let slug = '1';
  let data : ForecastData;
    
  data = await getForecastBySlug(authorId, slug);
  res.status(200).json(data)
}
