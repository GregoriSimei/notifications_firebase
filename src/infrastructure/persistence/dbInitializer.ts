import { typeormConn } from './typeorm';

export async function dbInitializer() {
  return typeormConn.initialize();
}
