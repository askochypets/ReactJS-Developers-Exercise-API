export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/Shippingdb',
  serverPort: process.env.serverPort || 3001,
  YAddress_BASE_URL:
    process.env.YAddress_BASE_URL || 'http://www.yaddress.net/api/address',
};
