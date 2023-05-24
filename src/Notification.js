import React from 'react'
import styles from './Notification.module.css'



const Notification = ({ name, description, action, time, status, read, img, content, id }) => {

  const [show, setShow] = React.useState(false)

  function handleClick() {
    read()
    setShow(!show)
  }
  return (
    <li onClick={handleClick} style={!status ? { backgroundColor: 'hsl(210, 60%, 98%)', transition:'.2s', animationDelay: `${id * 100}ms` } : { backgroundColor: 'white' , transition:'.2s', animationDelay: `${id * 100}ms` }} className={`${styles.item} fromUp`}> 
      <div className={`${styles.photo} ${img}`}></div>

      <p className={!status ? styles.isItRead : undefined}><span className={styles.name}>{name}</span> <span className={styles.description}>{description}</span> <span className={styles.action}>{action}</span></p>  

      <div><p className={styles.time}>{time}</p></div>

      {content && show && <p className={`${styles.content} fromUp`}>{content}</p>}
    </li>
  )
}

export default Notification