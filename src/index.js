function checkOpen(currentBracket, configs, stack) {
    for (let j = 0; j < configs.length; j++) {
        if (currentBracket === configs[j].open) {
            stack.push(configs[j])
            return true
        }
    }
    return false
}

function checkClose(currentBracket, stack) {
    if (stack.length !== 0) {
        let lastConfig = stack.pop()
        if (currentBracket === lastConfig.close) {
            return true
        } else {
            stack.push(lastConfig)
            return false
        }
    } else {
        return false
    }
}

module.exports = function check(str, bracketsConfig) {
    let configs = bracketsConfig.map(config => ({open: config[0], close: config[1]}))
    let stack = []
    let brackets = str.split("")
    for (let i = 0; i < brackets.length; i++) {
        let currentIsClose = checkClose(brackets[i], stack)
        if(!currentIsClose) {
            let currentIsOpen = checkOpen(brackets[i], configs, stack)
            if(!currentIsOpen) {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}
