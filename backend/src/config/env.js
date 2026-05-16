const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/mytawjeh',
  clientUrl: process.env.CLIENT_URL || '*',
};

module.exports = env;
