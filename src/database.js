import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432, 
    database: 'mywallet',
    password: '1234'
  });

  export default connection;