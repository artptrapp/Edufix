const admin = require('firebase-admin')
const { warn, info } = require('../utils/printHelper')
const readlineSync = require('readline-sync')

exports.checkInternet = async () => {
    warn('This operation requires an user id. Type the user ID to be measured in order to continue: ')
    const userId = readlineSync.question()
    info(`Starting internet measurement checking for user ${userId}`)

    const database = admin.firestore()
    const measuresDocs = await database.collection('connection').doc(userId).collection('measures').get()

    const totalMeasures = measuresDocs.docs.length

    if (!totalMeasures) {
        warn(`There are no measurements for user with id ${userId}, exitting.`)
        return
    }

    const firstDoc = measuresDocs.docs[0].data()
    let average = 0
    let max = firstDoc.measuredDelay
    let min = firstDoc.measuredDelay
    let totalSum = 0

    for (let doc of measuresDocs.docs) {
        const docValue = doc.data()

        if (docValue.measuredDelay < min && (docValue.measuredDelay != 0)) {
            min = docValue.measuredDelay
        } else if (docValue.measuredDelay > max) {
            max = docValue.measuredDelay
        }

        totalSum += docValue.measuredDelay
    }

    average = totalSum / totalMeasures

    info(`There were ${totalMeasures} internet measurements for this user.`)
    warn(` - Maximum delay: ${max} ms`, true)
    warn(` - Minimum delay: ${min} ms`, true)
    warn(` - Average delay: ${average} ms`, true)
}