const itemRouter = require('express').Router()
const items = require('../middleware/item')

itemRouter.get('/', items.readAll)
itemRouter.post('/', items.create)

module.exports = itemRouter