import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import './menu.css'

export default function Menu() {
    const MENU = [
        {title: 'Home', to: '/', key:uuidv4()}, // Изменено на '/'
        {title: 'Blog', to: '/blog', key:uuidv4()},
        {title: 'Works', to: '/works', key:uuidv4()}, // Изменено на '/portfolio'
        {title: 'About us', to: '/about-us', key:uuidv4()},
    ]
    return (
        <nav>
            <ul className="menu-item">
                {MENU.map(({title, to, key}) => (
                    <li key={key}>
                        <Link to={to}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
