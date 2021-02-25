import 'normalize.css';
import style from './index.css';
import $ from 'jquery';
import slackImg from './images/slack.png'
function component() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello Webpack';

    const imgEl = document.createElement('img');
    imgEl.src = slackImg;

    console.log(imgEl);
    el.appendChild(imgEl)

    el.classList = style.helloWebpack
    return el;
}

document.body.appendChild(component());
console.log($(`.${style.helloWebpack}`).length)
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);