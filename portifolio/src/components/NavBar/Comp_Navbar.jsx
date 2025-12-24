import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.leftGroup}>
          <div className={styles.dots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>

          <ul className={styles.center}>
            <li><a className={styles.link} href="#inicio">Início</a></li>
            <li><a className={styles.link} href="#sobre">Sobre mim</a></li>
            <li><a className={styles.link} href="#projetos">Projetos</a></li>
          </ul>
        </div>

        <div className={styles.right}>
          <button className={styles.langBtn} type="button">PT-BR</button>
        </div>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}
