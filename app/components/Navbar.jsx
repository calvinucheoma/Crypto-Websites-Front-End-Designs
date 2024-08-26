import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.navLogo}>
            Groot
        </div>
        <div className={styles.navButtons}>
            <button className={styles.navLogin}></button>
            <button className={styles.navAvatar}></button>
        </div>
    </nav>
  )
}

export default Navbar