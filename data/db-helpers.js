const db = require("./db-config");

// all resolve to promises
db.select("*").from("users"); // sql-like
// or
db("users"); // can pass in the table name to return all fields
/*
GET endpoint looks like:

router.get('/api/users', (req, res) => {
    db('users)
    .then(users => {
        res.status(200).json(users)
    })
    .catch (err => {
        res.status(500).json({ message: 'failed to get users' })
    })
})
*/

// or

db.select("id, name").from("users"); // for specific fields
// resolves to an array of users
/*
GET endpoint looks like:

router.get('/api/users', (req, res) => {
    db.select('id, name').from('users')
    .then(users => {
        res.status(200).json(users)
    })
    .catch (err => {
        res.status(500).json({ message: 'failed to get users' })
    })
})
*/

db("users").where({ id: 3 });
// resolves to array containing any users that match the 'where'
/* 
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db('users').where({ id })
    .then(users => {
        // must check the length of the response array to find if the user exists
        if(users.length) {
            res.status(200).json(users)
        } else {
            res.status(404).json({ message: 'Could not find user with given id' })
        }
    })
    .catch (error => {
        res.status(500).json({ message: 'Failed to get user' })
    })
})
*/

db("users").insert({ name: "Neo", age: 33 });
// resolve to an array containing the id of the new user
/*
server.post('/api/users', (req, res) => {
    const data = req.body;

    db('users').insert(data)
    .then(user => {
        if(users.length) {
            res.status(201).json({ message: 'Successfully added user' })
        } else {
            res.status(500).json({ message: 'Could not add user' })
        }
    })
    .catch (error => {
        res.status(500).json({ message: 'Failed to add user' })
    })
})
*/

db("users")
  .where({ id: 5 })
  .update({ age: 43 }); // 'where' comes before the 'update' in knex
// resolves to the count of records updated
/*
server.patch('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('users').where({ id }).update(changes)
    .then(user => {
        if(user > 0) {
            res.status(201).json({ message: 'Successfully updated user' })
        } else {
            res.status(404).json({ message: 'User not found'})
        }
    })
    .catch (error => {
        res.status(500).json({ message: 'Failed to update user' })
    })
})
*/

db("users")
  .where({ id: 5 })
  .delete();
// resolves to a count of records removed
/*
    server.delete('/api/users/:id', (req, res) => {
        const { id } = req.params

        db('users').where({ id }).del()
        .then(user => {
            if (user > 0) {
                res.status(200).json({ message: 'User successfully deleted' })
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        })
        .catch( err => {
            res.status(500).json({ message: 'failed to delete user' })
        })
    })
*/
