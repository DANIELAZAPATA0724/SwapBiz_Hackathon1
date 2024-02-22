import "./HomePage.css";
import { Logo } from "../components/Logo/Logo";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";
import { NavBar } from "../components/NavBar/NavBar";

export const HomePage = () => {
  return (
    <main className="homePage">
      <Logo />
      < SearchComponent />
      <section>
        <p>Explora las categorias</p>
        <div>
          <article>Creativo</article>
          <article>Mantenimiento</article>
          <article>Tecnología</article>
          <NavBar />
        </div>
      </section>
    </main>
  )
}
