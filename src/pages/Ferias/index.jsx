import "./Ferias.css";

export default function Ferias() {
  return (
    <div className="ferias-container">
      <h1 className="ferias-title">Ferias Taurinas</h1>

      <div className="ferias-grid">

        <div className="feria-card">
          <img src="/Galeria/plazas/pexels-quentin-martinez-2147503099-29749222.jpg" alt="Feria" />
          <h3>Feria de Madrid</h3>
          <p>Corridas, novilladas y rejones.</p>
        </div>

        <div className="feria-card">
          <img src="/Galeria/plazas/pierre-antona-H0vA-KTG9eA-unsplash.jpg" alt="Feria" />
          <h3>Feria de Sevilla</h3>
          <p>Tradición y arte en la Maestranza.</p>
        </div>

        <div className="feria-card">
          <img src="/Galeria/plazas/pexels-jcosta-20877142.jpg" alt="Feria" />
          <h3>Feria de Valencia</h3>
          <p>Temporada con ambiente y afición.</p>
        </div>

      </div>
    </div>
  );
}
