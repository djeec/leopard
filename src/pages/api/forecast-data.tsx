import { ForecastPropsCollection } from '@/types/forecastTypes'

import { getAllForecastsWithMetaData } from "@/lib/getForecasts";

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastPropsCollection>
) {
    let authorId = '100';
    let data : ForecastPropsCollection;
    data = await getAllForecastsWithMetaData(authorId);

    res.status(200).json(data)
}
