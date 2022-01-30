const NodeClass = require('./testTwo.schema')
const {
    nodefn
} = require('@mayahq/module-sdk')

module.exports = nodefn(NodeClass, "@mayahq/testmod-one")