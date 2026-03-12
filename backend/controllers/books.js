const { Book } = require('../models');

let getBookByISBN = async (request, response) => {
  try {
    let book = await Book.findOne({
      where: {
        isbn: request.params.isbn
      }
    });

    if (!book) {
      response.status(404).json({
        status: 404,
        message: 'Book not found'
      })
    } else {
      response.status(200).json({
        status: 200,
        data: book
      })
    }
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error fetching book',
      error: error.message
    })
  }
}

let createBook = async (request, response) => {
  try {
    if (
      request.body.title === undefined &&
      request.body.author_id === undefined &&
      request.body.genre === undefined &&
      request.body.publication_year === undefined &&
      request.body.isbn === undefined &&
      request.body.page_count === undefined
    ) {
      response.status(406).json({
        status: 406,
        message: 'Invalid book data'
      })
      return;
    }

    if (request.body.title === undefined || request.body.title === "") {
      request.body.title = "Sin titulo";
    }

    if (request.body.author_id === undefined || request.body.author_id === "") {
      response.status(406).json({
        status: 406,
        message: 'author_id is required'
      })
      return;
    }

    if (request.body.genre === undefined || request.body.genre === "") {
      request.body.genre = "Desconocido";
    }

    if (request.body.publication_year === undefined || request.body.publication_year === "") {
      request.body.publication_year = null;
    }

    if (request.body.isbn === undefined || request.body.isbn === "") {
      response.status(406).json({
        status: 406,
        message: 'isbn is required'
      })
      return;
    }

    if (request.body.page_count === undefined || request.body.page_count === "") {
      request.body.page_count = null;
    }

    let newBook = await Book.create({
      title: request.body.title,
      author_id: request.body.author_id,
      genre: request.body.genre,
      publication_year: request.body.publication_year,
      isbn: request.body.isbn,
      page_count: request.body.page_count
    });

    response.status(201).json({
      status: 201,
      data: newBook
    })
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: 'Error creating book',
      error: error.message
    })
  }
}

module.exports = {
  getBookByISBN,
  createBook,
}