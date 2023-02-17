/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../home-page.scss'

import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

setupCounter(document.querySelector('#counter'))