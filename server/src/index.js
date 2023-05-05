const db = require('.././database')
const app = require('.././index')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




// / Create user endpoint
app.post('/api/user/create', (req, res) => {
    const { username, email, password } = req.body;

    // Check if the username, email, and password were provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'username, email, and password are required.' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        // Insert the new user into the database
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(500).json({ message: 'User already exist.', status: 500 });

                }
                return res.status(500).json({ message: 'Internal server error.', });
            }

            // Generate a JWT token with the new user ID and email
            const token = jwt.sign({ id: result.insertId, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            let response = { username: username, token: token, status: 200 }
            res.json(response);
        });
    });
});



// Login endpoint
app.post('/api/user/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password were provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Check if the user exists in the database
    db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Compare the password provided with the hashed password stored in the database
        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Internal server error.' });
            }

            if (!result) {
                return res.status(401).json({ message: 'Invalid email or password.', status: 401 });
            }

            // Generate a JWT token with the new user ID and email
            const token = jwt.sign({ id: result.insertId, email }, process.env.JWT_SECRET, { expiresIn: '6h' });
            let response = { username: user.username, icon: user.icon, token: token };
            res.json(response);

        });
    });
});

// Verify user endpoint
app.post('/api/user/verify', (req, res) => {
    const { token } = req.body;
  
    // Check if the token was provided
    if (!token) {
      return res.status(400).json({ message: 'Token is required.' });
    }
  
    // Verify the token and extract the user ID and email
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const { id, email } = decodedToken;
      res.json({ id, email, verified: true });
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: 'Invalid token.' });
    }
  });



// / Create song endpoint
app.post('/api/songs/create', (req, res) => {
    const { title, score, song_key , token} = req.body;

    // Check if the title, score, and song_key were provided
    if (!title || !score || !song_key) {
        return res.status(400).json({ message: 'title, score, and song_key are required.' });
    }


    // Insert the new song into the database
    db.query('INSERT INTO songs (title, score, song_key) VALUES (?, ?, ?)', [title, score, song_key], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.', });
        }

        // Generate a JWT token with the new song ID and score
        let response = { message: 'song added ', status: 200 }
        res.json(response);
    });
});


//   get songs
app.get('/api/songs', (req, res) => {

    db.query("SELECT * FROM songs", (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error.', });
        }

        // Generate a JWT token with the new song ID and score
        let response = { songs: result, status: 200 }
        res.json(response);
    });

});





