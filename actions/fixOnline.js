const admin = require('firebase-admin')

exports.fixOnline = async () => {
    const database = admin.database()

    const roomsRef = database.ref('/rooms/')
    const rooms = await roomsRef.once('value')
    let totalUpdated = 0
    for (let key in rooms.val()) {
        const roomRef = database.ref(`/rooms/${key}/users-online-status`)
        const roomValue = await roomRef.once('value')
        for (let userId in roomValue.val()) {
            database.ref(`/rooms/${key}/users-online-status/${userId}`).set("offline")
            totalUpdated += 1
        }
    }

    console.log(`Updated ${totalUpdated} users to offline`)
}