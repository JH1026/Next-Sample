import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../src/utils/firebase-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const list = await db.collection('movies')
    .where('movieId', '==', req.query.id)
    .get();

  res.status(200).json({ exists: list.docs.length > 0 });
}
