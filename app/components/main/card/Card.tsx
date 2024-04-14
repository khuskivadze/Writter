import style from './Card.module.css'

export const  Card = () => {
    return (
        <section className= {style.card}>

            <div className= {style.title}>
                <div className={style.text}>
                    <h1>New Release</h1>
                </div>
                <div className={style.main_title}>
                    <h1>The Swan Isle (2035)</h1>
                </div>
                <div className={style.span}>
                    <span>I'm a paragraph. Click here to add your own text and edit me. 
                          It’s easy. Just click “Edit Text” or double click me to 
                          add your own content and make changes to the font.
                          I’m a great place for you to tell a story and 
                          let your users know a little more about you.
                    </span>
                </div>
                <div className={style.order}>
                    <a href="">Order Now</a>
                </div>
                <div className={style.buttons}>
                    <button>Amazon</button>
                    <button>Google</button>
                    <button>ibooks</button>

                </div>

                    
            </div>
            <div className= {style.poster}>
                <img src="/Screen Shot 2021-02-07 at 9_24_47.webp" alt="" />

            </div>

     
        </section>
    )
}