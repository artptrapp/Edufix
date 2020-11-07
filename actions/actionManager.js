const fixOnlineHandler = require('./fixOnline')
const countOnlineHandler = require('./countOnline')
const checkInternetHandler = require('./checkInternet')

const handlers = {
    'fix-online': fixOnlineHandler.fixOnline,
    'count-online': countOnlineHandler.countOnline,
    'check-internet': checkInternetHandler.checkInternet
}

const getAction = (actionName) => {
    return handlers[actionName]
}

exports.executeAction = (actionName) => {
    return getAction(actionName)()
}