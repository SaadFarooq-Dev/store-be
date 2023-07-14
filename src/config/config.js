import "dotenv/config"

const {
  DB_UNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  TEST_DB_UNAME,
  TEST_DB_PASSWORD,
  TEST_DB_NAME,
  TEST_DB_HOST,
  PROD_DB_UNAME,
  PROD_DB_PASSWORD,
  PROD_DB_NAME,
  PROD_DB_HOST,
} = process.env;


export default {
  development: {
    username: DB_UNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "store_be_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "store_be_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}


