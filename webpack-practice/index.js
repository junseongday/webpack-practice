import 'normalize.css';
import style from './index.css';
function component() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello Webpack';
    el.classList = style.helloWebpack
    return el;
}

document.body.appendChild(component());
