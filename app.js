import express from 'express';
import { Router } from './routes/routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
  res.sendFile(
    'C:/Users/INTERNET/Desktop/Html/FormsBasic2/client/register.html',
  );
});
app.use('/', Router);

app.listen(3000, () => {
  console.log('server run');
});
