import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { dataSource } from '../typeorm';

// TODO: correct the fail onfulfilled

dataSource.initialize().then(onfulfilled:() => {
  app.listen(3333, () => {
    console.log('Server started on port 3333!')
  });
});




