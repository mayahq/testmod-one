const {
    Node,
    Schema
} = require('@mayahq/module-sdk')

class TestOne extends Node {
    constructor(node, RED, opts) {
        super(node, RED, {
            ...opts,
            // masterKey: 'You can set this property to make the node fall back to this key if Maya does not provide one'
        })
    }

    static schema = new Schema({
        name: 'test-one',
        label: 'test-one',
        category: 'Testmod One',
        isConfig: false,
        fields: {
            // Whatever custom fields the node needs.
        },

    })

    onInit() {
        // Do something on initialization of node
    }

    async onMessage(msg, vals) {
        console.log('hehe 23')
        // Handle the message. The returned value will
        // be sent as the message to any further nodes.

    }
}

module.exports = TestOne