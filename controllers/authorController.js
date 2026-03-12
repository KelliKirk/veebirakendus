const Author = require('../models/author.js');
const ContactData = require('../models/contactData.js');

const createAuthor = async (req, res) => {
  try {
    const contactData = new ContactData({
      address: req.body.contact.address,
      phone: req.body.contact.phone,
    });
    const savedContactData = await contactData.save();

    const author = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      personalCode: req.body.personalCode,
      contactData: savedContactData._id
    });
    const savedAuthor = await author.save();
    res.status(200).json(savedAuthor);
  }
  catch (error) {
    res.status(400).json({message: error})
  }
}

const getAuthors = async (req, res) => {
  try {
    const data = await Author.find().populate('contactData');
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const getAuthorById = async (req, res) => {
  try {
    const data = await Author.findById(req.params.id).populate('contactData');
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    const data = await Author.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    const contactDataId = author.contactData;

    await ContactData.findByIdAndUpdate(contactDataId, {
      address: req.body.contact.address,
      phone: req.body.contact.phone,
    });

    const result = await Author.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        personalCode: req.body.personalCode,
        contactData: contactDataId
      },
      { new: true }
    ).populate('contactData');

    res.json(result)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

module.exports = { createAuthor, getAuthors, getAuthorById, deleteAuthor, updateAuthor };