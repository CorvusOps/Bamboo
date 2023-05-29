module.exports = {
	database: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sp-dev',
	secret: 'sports-secret'
}