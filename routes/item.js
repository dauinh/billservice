const itemRouter = require('express').Router()
const items = require('../middleware/item')

itemRouter.get('/', items.getAll)
itemRouter.post('/', items.create)

module.exports = itemRouter