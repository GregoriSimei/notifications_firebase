import { dbInitializer } from './infrastructure/persistence/dbInitializer';

dbInitializer()
  .then(() => {
    console.log('DB Connected');
  })
  .catch(() => {
    console.log('Error to init DB');
  });
