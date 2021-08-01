// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const fetchData = await fetch('https://www.googleapis.com/books/v1/volumes?q=React');
  const data = await fetchData.json();

  res.status(200).json(data);
}
