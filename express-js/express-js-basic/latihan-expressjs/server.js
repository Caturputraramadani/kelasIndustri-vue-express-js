const express = require('express');
const app = express();
const port = 4000;

const books = require('./data');

// Fungsi untuk mendapatkan penulis buku berdasarkan genre "Fantasy"
async function getFantasyAuthors() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fantasyAuthors = books
        .filter((book) => book.genre === 'Fantasy')
        .map((book) => book.author);
      resolve(fantasyAuthors);
    }, 5000);
  });
}

app.get('/fantasy', async (req, res) => {
  try {
    const fantasyAuthors = await getFantasyAuthors();
    console.log('Authors based on "Fantasy" genre:', fantasyAuthors.join(', '));
    res.send('Data akan ditampilkan di terminal setelah 5 detik.');
  } catch (error) {
    res.status(500).send('Terjadi kesalahan.');
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost: ${port}`);
});
