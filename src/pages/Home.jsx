import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a RuedoSocial</h1>
      <p className="home-subtitle">
        La nueva plaza digital de la afición taurina.
      </p>

      <div className="home-grid">

        {/* FERIAS */}
        <a href="/ferias" className="home-card">
          <img src="/Galeria/ferias/ff01.jpg" alt="Ferias" />
          <span>Ferias</span>
        </a>

        {/* TOREROS */}
        <a href="/toreros" className="home-card">
          <img src="/Galeria/toreros/mini-toreros.png" alt="Toreros" />
          <span>Toreros</span>
        </a>

        {/* GANADERÍAS */}
        <a href="/ganaderias" className="home-card">
          <img src="/Galeria/toros/mini-ganaderias.png" alt="Ganaderías" />
          <span>Ganaderías</span>
        </a>

        {/* RuedoRank */}
        <a href="/ruedorank" className="home-card">
          <img src="/Galeria/toreo/wallpaperbetter.com_1920x1080.jpg" alt="RuedoRank" />
          <span>RuedoRank</span>
        </a>

        {/* Resultados */}
        <a href="/resultados" className="home-card">
          <img src="/Galeria/plazas/mini-ferias.png" alt="Resultados" />
          <span>Resultados</span>
        </a>

        {/* Noticias */}
        <a href="/noticias" className="home-card">
          <img src="/Galeria/ganaderias/fg01.jpg" alt="Noticias" />
          <span>Noticias</span>
        </a>

      </div>
    </div>
  );
}
