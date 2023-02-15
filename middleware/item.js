const bills = require('../db/test.json')

const readAll = (req, res) => {
  try {
    return res.status(200).json(bills);
  } catch (error) {
    console.log(error);
    return res.redirect('/error');
  }
}

const create = (req, res) => {
  const body = req.body;
  const fields = [body.name, body.address, body.hospital, body.date, body.amount];
  const fieldHeader = ['name', 'address', 'hospital', 'date', 'amount'];
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i] || fields[i] == undefined) {
      console.log(`Missing fields: ${fieldHeader[i]}`);
      return res.status(400).json(`Missing fields: ${fieldHeader[i]}`);
    }
  }
  const newBill = {
    name: body.name,
    address: body.address,
    hospital: body.hospital,
    date: body.date,          // date of service
    amount: body.amount
  };
  try {
    return res.status(201).json(newBill);
  } catch (error) {
    console.log(error);
    return res.redirect('/error');
  }
}

module.exports = {
  readAll, create
}