exports.parseArgs = (args) => {
    let parsed = {}
    for (let key of args) {
        const splitted = key.split('=')
        const argKey = splitted[0].replace('--', '')
        parsed[argKey] = splitted[1]
    }
    return parsed
}