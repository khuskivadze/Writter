import style from './Main.module.css'
import { Profile } from './section1/Profile'
import { Cover } from './section2/Cover'


export const  Main = () => {
    return (
        <main className= {style.main}>
            <Profile/>
            <Cover/>
            
        </main>
    )
}