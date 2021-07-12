import createMenu from '../../components/menu/menu';
import './blog.scss';
var menu = createMenu(['Главная', 'блог']);
document.body.appendChild(menu);
console.log('in blog.js');