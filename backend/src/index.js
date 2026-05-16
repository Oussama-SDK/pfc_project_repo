require('dotenv').config();

const app = require('./app');
const connectDatabase = require('./config/database');
const env = require('./config/env');

async function startServer() {
  try {
    await connectDatabase();
    app.listen(env.port, () => console.log(`Server running on port ${env.port}`));
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

startServer();
