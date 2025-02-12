import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { client, db } = await connectToDatabase();
      const forwarded = req.headers['x-forwarded-for'];
      // The data you want to insert
      let clientInfo = req.body;
      const email = clientInfo.emailAddress;
      const ipAddress = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;
      const userAgent = clientInfo.userAgent;
      const location = clientInfo.location;
      const timezone = clientInfo.timezone;
      const created = clientInfo.created
      const deleted = clientInfo.deleted;
      const updated = created;
    
      // Insert data into the 'users' collection (you can choose any collection name)
      const result = await db.collection('subscribers').insertOne({ email, ipAddress, userAgent, location, timezone, created, updated, deleted });
      // Respond with the inserted record
      res.status(200).json({ message: 'Record added successfully', record: email });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add record', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
