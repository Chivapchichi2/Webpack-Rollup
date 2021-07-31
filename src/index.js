import '../index.css';
import img from './image/Rollup.js1_.jpg';

const rollupImg = document.createElement('img');
rollupImg.className = 'rollupImg';
rollupImg.src = img;
rollupImg.alt = 'Rollup';

document.body.append(rollupImg);

console.log('Hello Word!');
