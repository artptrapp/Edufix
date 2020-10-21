const admin = require('firebase-admin')

exports.countOnline = async () => {
    const database = admin.database()

    const roomsRef = database.ref('/rooms/')
    const rooms = await roomsRef.once('value')
    const roomsValue = rooms.val()
    let totalCount = 0
    for (let key in roomsValue) {
        const room = roomsValue[key]
        const usersOnlineStatus = room['users-online-status']
        for (let userKey in usersOnlineStatus) {
            const userOnlineStatus = usersOnlineStatus[userKey]
            if (userOnlineStatus === 'online') {
                totalCount ++
            }
        }
    }

    console.log(`There are a total of ${totalCount} users online.`)
}