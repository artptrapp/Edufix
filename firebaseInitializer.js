const admin = require('firebase-admin')
const { getConfig } = require('./config/configManager')

exports.initialize = (codename) => {
    const config = getConfig(codename)
    return admin.initializeApp(config)
}