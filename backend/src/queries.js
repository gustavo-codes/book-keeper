const getBooks = "SELECT * FROM books;"
const getBookById = "SELECT * FROM books WHERE id = $1"
const addBook = "INSERT INTO books(name,year,author) VALUES ($1,$2,$3)"
const deleteBook = "DELETE FROM books WHERE id = $1"
const checkIfBookExists = "SELECT b FROM books b WHERE b.name = $1"
const updateBook = "UPDATE books SET name = $1 WHERE id = $2"

module.exports = {
    getBooks,
    getBookById,
    checkIfBookExists,
    addBook,
    deleteBook,
    updateBook
}