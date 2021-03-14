import { render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import {catsTemplate} from './catsTemplate.js'

const catsSection = document.getElementById('allCats');




render(catsTemplate(cats), catsSection);