import style from './menuItem.module.css'


export const MenuItem = () =>{
    return (
        <nav className= {style.navigation}>
            <ul className= {style.navLinks}>
                <li><a href="">APPEARANCES</a></li>
                <li><a href="">BOOK</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>


            </ul>
            
        </nav>
    )
}