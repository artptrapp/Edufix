const admin = require('firebase-admin')

exports.getConfig = (codename) => {
    try {
        const contents = require(`./${codename}-config.json`)
        return {
            credential: admin.credential.cert(contents),
            databaseURL: `https://exams-${codename}.firebaseio.com`
        }
    } catch (e) {
        throw new Error('Invalid environment provided')
    }
}