const fixOnlineHandler = require('./fixOnline')
const countOnlineHandler = require('./countOnline')

const handlers = {
    'fix-online': fixOnlineHandler.fixOnline,
    'count-online': countOnlineHandler.countOnline
}

const getAction = (actionName) => {
    return handlers[actionName]
}

exports.executeAction = (actionName) => {
    return getAction(actionName)()
}