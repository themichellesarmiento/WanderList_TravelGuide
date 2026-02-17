import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import homepageRoute from './routes/home.js';
import adventureRoute from './routes/adventure.js';
import cultureRoute from './routes/culture.js';
import relaxationRoute from './routes/relaxation.js'

dotenv.config({ path: './config.env' });

const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');

/*middlewares*/
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.locals.currentUrl = req.originalUrl;
  next();
})
/*routes*/
app.use('/', homepageRoute);
app.use('/adventures', adventureRoute);
app.use('/cultures', cultureRoute);
app.use('/relaxations', relaxationRoute);

/*404 route*/
app.use((req, res) => {
 return res.status(404).render(path.join(__dirname, 'views/pages/destination'),{
  error:true
 })
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
}
);