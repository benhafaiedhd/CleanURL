const psl = require('psl')

module.exports = class CleanURL {
    constructor(absolute) {
        this.absolute = absolute.replace(/^(?:https?:\/\/)?(w\d?\d?\.|wvw\d\.|ww\d?\d?\.|ww\w?\d?\.|www\d?\d?\.)?/, '')
        this.relative = new URL(`https://${this.absolute}`).hostname
        this.constant = psl.parse(this.relative).domain
    }
}