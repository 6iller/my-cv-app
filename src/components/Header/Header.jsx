import { v4 as uuidv4 } from 'uuid';

export default function Header () {
    const MENU = [
        {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 
        {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 
        {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 
        {title: 'Portfolio', to: 'portfolio', key:uuidv4()}, 

    ]
    return (
        <header>
        <div className="logo">logo</div>
        <nav>
            <ul>
                {MENU.map(({title, key}) => <li key = {key}>{title}</li>)}
            </ul>
        </nav>
        </header>   
    )
};