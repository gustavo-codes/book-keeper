const getBooks = "SELECT * FROM books;"
const getBookById = "SELECT * FROM books WHERE id = $1"
const addBook = "INSERT INTO books(name,year,author,content) VALUES ($1,$2,$3,$4) RETURNING id"
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