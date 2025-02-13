import { connectToDatabase } from '../../lib/mongodb';
///verify-email?token=unique-token
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    //const record = await db.collection('subscribers').findOne({ uuid: token });
    const result = await db.collection('subscribers').updateOne( { uuid: token },  {
        $set: {
            updated: new Date().toLocaleString(),
            verified: true
        }
      });

    return res.status(200).json({ message: 'Email verified successfully!' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
