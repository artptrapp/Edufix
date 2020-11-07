const colorMapping = {
    RED: "\x1b[31m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    BLUE: "\x1b[34m"
}

const configMapping = {
    BRIGHT: "\x1b[1m",
    REVERSED: "\x1b[7m",
    UNDERSCORE: "\x1b[4m"
}

exports.warn = (text, reversed) => {
    console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', configMapping.UNDERSCORE, colorMapping.YELLOW, text)
}

exports.danger = (text, reversed) => {
    console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', colorMapping.RED, text)
}

exports.print = (text, reversed) => {
    console.log(reversed ? configMapping.REVERSED : '', text)
}

exports.info = (text, reversed) => {
    console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', colorMapping.BLUE, text)
}