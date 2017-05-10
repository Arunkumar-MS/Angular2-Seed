import 'angular2-universal-polyfills';
import './__workaround.node';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { createEngine } from 'angular2-express-engine';
import { ServerAppModule } from './app/server.app.module';
const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));


app.set('port', process.env.PORT || 4000);
//app.set('views', ROOT, 'dist/client'));

app.engine('.html', createEngine({ ngModule: ServerAppModule }));
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 60 seconds
  res.header('Cache-Control', 'max-age=60');
  next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), {index: false}));


function ngApp(req, res) {
  res.render('index', {
    req,
    res,
    preboot: false, // turn on if using preboot
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: `http://localhost:${ app.get('port') }`
  });
}
app.get('/', ngApp);

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

let server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
