 import style from './header.module.css';
import { MenuItem } from './menuItems/menuItems';
import { MenuLogo } from './menuLogo/menuLogo';


export  const Header = () => {
   return (
    <> 
     <header className= {style.header}>
         <MenuLogo/>
         <MenuItem/>
     </header>
     <div className={style.line}></div>
    </>

   )

}