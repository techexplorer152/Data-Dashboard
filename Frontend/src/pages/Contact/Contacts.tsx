import styles from './Contacts.module.css'

 function Contacts( ) {
    return(
        <div className={styles.container}>
           <div className={styles.left_part}>
               <h1 className={styles.big_title}>
                   Got an idea? Reach out to talk!
               </h1>

               <div>
                   <h3>Phone:</h3>
                   <a href="tel:+33333333" target="_blank" rel="noopener noreferrer">
                        +3333333
                   </a>
               </div>

               <div>
                   <h3>Email:</h3>
                   <a href="mailto:hey@gmail.com" target="_blank" rel="noopener noreferrer">
                       hey@gmail.com
                   </a>
               </div>

               <div>
                   <h3>LinkedIn:</h3>
                   <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                       linkedin.com
                   </a>
               </div>
               <div>
                   <h3>Github:</h3>
                   <a href="https://github.com/techexplorer152" target="_blank" rel="noopener noreferrer">
                       github
                   </a>
               </div>

           </div>
           <div className={styles.right_part}>
               <h2>test</h2>

           </div>



        </div>
    )

 }

 export default Contacts;