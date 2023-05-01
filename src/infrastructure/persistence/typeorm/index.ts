import { DataSource } from 'typeorm';
import { databaseConfig } from '../../config/database';

const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = databaseConfig;

const typeormConn = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  entities: []
});

export { typeormConn };
