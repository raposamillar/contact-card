// Import modules
import './form';
import './submit';

// Import CSS files
import '../css/index.css';

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Bird from '../images/pexels-jonas-11423821.jpg';

window.addEventListener('load', function () {
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
  document.getElementById('birdThumbnail').src = Bird;
});