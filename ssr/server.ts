
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;
const APP_FOLDER = join(process.cwd(), 'dist', 'ssr');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP) // * For lazy loading
  ]
}));

app.set('view engine', 'html');
app.set('views', APP_FOLDER);

app.get('*.*', express.static(APP_FOLDER));
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
