import { app } from './infrastructure/config/app';
import { APP_PORT } from './infrastructure/config/server';

app.listen(APP_PORT, () => {
  console.log(`App runing ${APP_PORT}`);
});
