import { Navbar } from "./components/NavBar/Comp_Navbar";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" style={{ height: 400 }}>
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
        </section>

        <section id="sobre" style={{ height: 400 }} />
        <section id="projetos" style={{ height: 400 }} />
      </main>
    </>
  );
}
