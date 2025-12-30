import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./navbar.module.css";

const LANGS = [
  { code: "pt-BR", label: "PT-BR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setOpen((v) => !v);
  }

  function changeLang(code) {
    i18n.changeLanguage(code);
    setOpen(false);
  }

  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // fecha no ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const current = (i18n.resolvedLanguage || i18n.language || "pt-BR").replace("_", "-");

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
            <li>
              <a className={styles.link} href="#inicio">
                {t("nav.inicio")}
              </a>
            </li>
            <li>
              <a className={styles.link} href="#sobre">
                {t("nav.sobre")}
              </a>
            </li>
            <li>
              <a className={styles.link} href="#projetos">
                {t("nav.projetos")}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right} ref={menuRef}>
          <button
            className={styles.langBtn}
            type="button"
            onClick={toggleMenu}
            aria-haspopup="menu"
            aria-expanded={open}
            title="Selecionar idioma"
          >
            {current.toUpperCase()}
          </button>

          {open && (
            <div className={styles.langMenu} role="menu">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={styles.langItem}
                  onClick={() => changeLang(l.code)}
                  role="menuitem"
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className={styles.bottomLine} />
    </header>
  );
}
