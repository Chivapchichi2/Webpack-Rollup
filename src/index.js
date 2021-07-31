import '../index.css';
import img from './image/Webpack.png';

const webpackImg = document.createElement('img');
webpackImg.className = 'webpackImg';
webpackImg.src = img;
webpackImg.alt = 'Rollup';

document.body.append(webpackImg);

console.log('Hello Word!');
