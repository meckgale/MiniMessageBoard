require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  message TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  const client = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT || 5432,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Messages table created");
}

main();
