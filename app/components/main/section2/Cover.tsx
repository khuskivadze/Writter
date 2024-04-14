import { Card } from '../card/Card';
import style from './Cover.module.css';

export  const Cover = () => {
    return (
        <section className= {style.cover}>
            <section className= {style.overlay}>
                <Card/>
            </section>

        </section>
    )
}