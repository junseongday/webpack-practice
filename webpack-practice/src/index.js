import 'normalize.css';
import style from './index.module.scss';
import $ from 'jquery';
import slackImg from './images/slack.png';
import slackSvg from './images/slack.svg'
function component() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello Webpack';

    const imgEl = document.createElement('img');
    imgEl.src = slackSvg;
    imgEl.classList = style.slackImg;

    console.log(imgEl);
    console.log(style);
    el.appendChild(imgEl)

    el.classList = style.helloWebpack
    return el;
}

document.body.appendChild(component());
console.log($(`.${style.helloWebpack}`).length)
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);