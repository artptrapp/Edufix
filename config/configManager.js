const admin = require('firebase-admin')
const { danger, warn } = require('../utils/printHelper')

exports.getConfig = (codename) => {
    try {
        const contents = require(`./${codename}-config.json`)
        return {
            credential: admin.credential.cert(contents),
            databaseURL: `https://exams-${codename}.firebaseio.com`
        }
    } catch (e) {
        danger('Invalid environment provided: ' + codename)
        warn(`Did you forget to get ${codename} Service Account from Firebase?`)
        process.exit()
    }
}