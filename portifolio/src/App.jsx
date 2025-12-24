import { Navbar } from './components/NavBar/Comp_Navbar'  

function App() {

  return (
       <>
      <Navbar />

      <main>
        <section id="inicio" style={{ height: 400 }} />
        <section id="sobre" style={{ height: 400 }} />
        <section id="projetos" style={{ height: 400 }} />
      </main>
    </>
  )
}

export default App
