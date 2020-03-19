const knex = require("knex"); // first bring in the library

// knex needs a config object to tell it about our database
// setting it up like this is not best practice
const config = {
  client: "sqlite3", // our database type
  connection: {
    // where we can find our database file
    filename: "./data/users.db3" // path with respect to the root of the repo
  },
  useNullAsDefault: true
};

const db = knex(config); // make db object

module.exports = db; // export it
