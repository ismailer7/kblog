import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { client, db } = await connectToDatabase();
      const forwarded = req.headers['x-forwarded-for'];
      let email = req.body;
      const result = await db.collection('subscribers').updateOne( { email: email},  {
        $set: {
            ipAddress: forwarded,
            updated: new Date().toLocaleString(),
            deleted: true
        }
      });
      // Respond with the inserted record
      res.status(200).json({ message: 'Record Updated successfully', record: email });
    } catch (error) {
      res.status(500).json({ error: 'Failed to Update record', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
