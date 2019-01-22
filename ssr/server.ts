
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;
const APP_FOLDER = join(process.cwd(), 'dist', 'browser');
const { AppServerModuleNgFactory } = require('./server/main');

