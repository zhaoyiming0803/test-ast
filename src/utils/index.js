const _ = module.exports = {}

_.trimCurly = str => str.replace(/(?:{{)|(?:}})/ig, '')