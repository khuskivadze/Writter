import style from './Profile.module.css';


export const Profile = () =>{
    return (
        <section className= {style.section}>

           <section className={style.container}>
                <div className= {style.profile}>
                   <img src="./GettyImages-11967148821.webp" alt="" />
                </div>
                <div className= {style.title}>
                  <h1>Kayla Griffith</h1>
                  <span>Award Winning Author</span>
                </div>
           </section>


        </section>
    )
}