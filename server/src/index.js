const db = require('.././database')
const app = require('.././index')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AuthEndpoints = require('./auth/index');


// Auth endpoins
AuthEndpoints


//Create song endpoint
app.post('/api/songs/create', (req, res) => {
    const { title, score, song_key, id, author } = req.body;

    // Check if the title, score, and song_key were provided
    if (!title || !score || !song_key || !author) {
        return res.status(400).json({ message: 'title, score, and song_key are required.' });
    }


    // Insert the new song into the database
    db.query('INSERT INTO songs (title, score, song_key, user_id, author) VALUES (?, ?, ?, ?, ? )', [title, score, song_key, id, author], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.', err });
        }

        let response = { message: 'song added ', status: 200 }
        res.json(response);
    });
});

// Update song endpoint
app.put('/api/songs/:id/update', (req, res) => {
    const songId = req.params.id;
    const { title, score, song_key, author } = req.body;

    // Check if the title, score, and song_key were provided
    if (!title || !score || !song_key || !author) {
        return res.status(400).json({ message: 'title, score, and song_key are required.' });
    }

    // Update the song in the database
    db.query('UPDATE songs SET title = ?, score = ?, song_key = ?, author = ? WHERE id = ?', [title, score, song_key, author, songId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.', err });
        }

        // Check if the song was found and updated
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Song not found.' });
        }

        let response = { message: 'Song updated successfully.', status: 200 };
        res.json(response);
    });
});









app.get('/api/songs', (req, res) => {
    const page = parseInt(req.query.page) || 1; // current page number
    const perPage = parseInt(req.query.perPage) || 10; // number of items per page
    const title = req.query.title || '';

    const offset = (page - 1) * perPage; // calculate the starting index for the current page

    db.query(`SELECT * FROM songs WHERE title LIKE '%${title}%' ORDER BY created_at DESC  LIMIT ${perPage} OFFSET ${offset}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        db.query(`SELECT COUNT(*) AS count FROM songs WHERE title LIKE '%${title}%'`, (err, countResult) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Internal server error.' });
            }

            const totalCount = countResult[0].count;
            const totalPages = Math.ceil(totalCount / perPage);

            const response = {
                songs: result,
                totalPages,
                currentPage: page,
                totalCount,
                status: 200
            };

            res.json(response);
        });
    });
});








// get single song
app.get('/api/songs/:id', (req, res) => {

    db.query("SELECT * FROM songs WHERE id =" + req.params['id'], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.', });
        }

        let response = { result: result[0], status: 200 }
        res.json(response);
    });

});

// query  songs
app.post('/api/songs/query', (req, res) => {

    const { title } = req.body;

    db.query("SELECT * FROM songs WHERE title LIKE ?", [`%${title}%`], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error.', });
        }

        let response = { songs: result, status: 200, }
        res.json(response);
    });
});

