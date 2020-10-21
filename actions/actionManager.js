const fixOnlineHandler = require('./fixOnline')

const handlers = {
    'fix-online': fixOnlineHandler.fixOnline
}

const getAction = (actionName) => {
    return handlers[actionName]
}

exports.executeAction = (actionName) => {
    return getAction(actionName)()
}