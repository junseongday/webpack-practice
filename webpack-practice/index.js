import 'normalize.css';
import style from './index.css';
import $ from 'jquery';
function component() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello Webpack';
    el.classList = style.helloWebpack
    return el;
}

document.body.appendChild(component());
console.log($(`.${style.helloWebpack}`).length)
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);