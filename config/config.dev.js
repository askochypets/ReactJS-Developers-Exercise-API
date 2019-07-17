export default {
  dbHost: process.env.dbHost || 'localhost',
  dbPort: process.env.dbPort || '27017',
  dbName: process.env.dbName || 'Shippingdb',
  serverPort: process.env.serverPort || 3001,
  YAddress_BASE_URL: 'http://www.yaddress.net/api/address',
};
