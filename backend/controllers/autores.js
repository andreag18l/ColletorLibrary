const { Author } = require('../models');

let getAutores = async (request, response) => {
  try {
    let authors = await Author.findAll();
    if (authors.length <= 0) {
      response.status(204).json({
        status: 204,
        message: 'No authors found'
      })
    } else {
      response.status(200).json({
        status: 200,
        data: authors
      })
    }
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error fetching authors',
      error: error.message
    })
  }
}

let createAutor = async (request, response) => {
  try {
    if (
      request.body.first_name === undefined &&
      request.body.last_name === undefined &&
      request.body.birth_year === undefined &&
      request.body.nationality === undefined
    ) {
      response.status(406).json({
        status: 406,
        message: 'Invalid author data'
      })
      return;
    }

    if (request.body.first_name === undefined || request.body.first_name === "") {
      request.body.first_name = "Anonimo";
    }

    if (request.body.last_name === undefined || request.body.last_name === "") {
      request.body.last_name = "Anonimo";
    }

    if (request.body.nationality === undefined || request.body.nationality === "") {
      request.body.nationality = "Anonimo";
    }

    if (request.body.birth_year === undefined || request.body.birth_year === "") {
      request.body.birth_year = null;
    }

    let newAuthor = await Author.create({
      firstName: request.body.first_name,
      lastName: request.body.last_name,
      birthYear: request.body.birth_year,
      nationality: request.body.nationality
    });

    response.status(201).json({
      status: 201,
      data: newAuthor
    })
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error creating author',
      error: error.message
    })
  }
}

module.exports = {
  getAutores,
  createAutor,
}