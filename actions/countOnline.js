const admin = require('firebase-admin')
const { print, warn, info } = require('../utils/printHelper')
const readlineSync = require('readline-sync')

var shouldRepeat = false

exports.countOnline = async () => {
    const database = admin.database()

    if (!shouldRepeat) {
        warn('Would you like this operation to repeat every 10 seconds?')
        const answer = readlineSync.question() || ''
        shouldRepeat = ['s', 'y'].includes(answer.toLowerCase())
    }

    let totalOnline = 0
    let totalUsers = 0
    const onlineStatusesRef = await database.ref('/users-online-status/').once('value')
    const onlineUsers = onlineStatusesRef.toJSON()

    for (let key in onlineUsers) {
        const user = onlineUsers[key]
        if (user.state === 'online') {
            totalOnline++
        }
        totalUsers++
    }

    //console.log(`There are a total of ${totalOnline} users online, out of ${totalUsers}`)
    const percentage = ((totalOnline / totalUsers) * 100).toFixed(2)
    console.clear()
    print('There are: ')
    warn(` - ${totalUsers} found on Firebase`)
    warn(` - Out of them, ${totalOnline} are online`)
    info(`This means that ${percentage}% of all the people are online.`)

    if (shouldRepeat) {
        setTimeout(() => {
            this.countOnline()
        }, 10 * 1000)
    } else {
        process.exit()
    }
}