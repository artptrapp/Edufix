const firebaseInitializer = require('./firebaseInitializer')
const argParser = require('./argParser')
const actionHandler = require('./actions/actionManager')

const args = process.argv.slice(2)
const parsedArgs = argParser.parseArgs(args)

if (!parsedArgs.environment) {
    throw new Error('No environment provided.')
}

if (!parsedArgs.action) {
    throw new Error('No action provided.')
}

firebaseInitializer.initialize(parsedArgs.environment)
actionHandler.executeAction(parsedArgs.action)