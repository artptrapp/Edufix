const fixOnlineHandler = require('./fixOnline')
const countOnlineHandler = require('./countOnline')
const checkInternetHandler = require('./checkInternet')
const { danger } = require('../utils/printHelper')

const handlers = {
    'fix-online': fixOnlineHandler.fixOnline,
    'count-online': countOnlineHandler.countOnline,
    'check-internet': checkInternetHandler.checkInternet
}

const getAction = (actionName) => {
    if (!Object.keys(handlers).includes(actionName)) {
        danger(`Invalid action: ${actionName}`)
        process.exit()
    }
    return handlers[actionName]
}

exports.executeAction = (actionName) => {
    return getAction(actionName)()
}