const admin = require('firebase-admin')

exports.countOnline = async () => {
    const database = admin.database()

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

    console.log(`There are a total of ${totalOnline} users online, out of ${totalUsers}`)
}