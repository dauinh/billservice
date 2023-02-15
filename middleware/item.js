const bills = require('../db/test.json')

const getAll = (req, res) => {
  try {
    res.status(200).json(bills);
  } catch (error) {
    console.log(error);
    res.redirect('/error');
  }
}

const create = (req, res) => {
  const body = req.body;
  if (!(body.name || body.address || body.hospital || body.amount)) {
    res.status(400).json('Empty input');
  }
  const newBill = {
    name: body.name,
    address: body.address,
    hospital: body.hospital,
    date: body.date,          // date of service
    amount: body.amount
  };
  try {
    res.status(201).json(newBill);
  } catch (error) {
    console.log(error);
    res.redirect('/error');
  }
}

module.exports = {
  getAll, create
}