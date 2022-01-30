const NodeClass = require('./testOne.schema')
const {
    nodefn
} = require('@mayahq/module-sdk')

module.exports = nodefn(NodeClass, "@mayahq/testmod-one")