import { connectToDatabase } from '../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { client, db } = await connectToDatabase();
      const forwarded = req.headers['x-forwarded-for'];
      // The data you want to insert
      let clientInfo = req.body;
      const email = clientInfo.emailAddress;
      const uuid = uuidv4();
      const ipAddress = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;
      const userAgent = clientInfo.userAgent;
      const location = clientInfo.location;
      const timezone = clientInfo.timezone;
      const created = clientInfo.created
      const deleted = clientInfo.deleted;
      const updated = created;
      const verified = false;
      
      const record = await db.collection('subscribers').findOne({ email });
      if(record != null) {
        res.status(500).json({ error: 'Record Already Exist!', details: error.message });
        return;
      } else {
        // Insert data into the 'users' collection (you can choose any collection name)
        const result = await db.collection('subscribers').insertOne({ email, uuid, ipAddress, userAgent, location, timezone, created, updated, deleted, verified });
      
        // Respond with the inserted record 
        res.status(200).json({ message: 'Record added successfully', record: email });
      }
      
    } catch (error) {
      //console.log('erororro' + error.message)
      res.status(500).json({ error: 'Failed to add record', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
