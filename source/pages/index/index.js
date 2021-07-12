import createMenu from '../../components/menu/menu';
import './index.scss';

var menu = createMenu(['Главная', 'блог']);
document.body.appendChild(menu);
console.log('in index.js');