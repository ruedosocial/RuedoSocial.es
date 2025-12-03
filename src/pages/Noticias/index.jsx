import "./Noticias.css";

export default function Noticias() {

  const noticias = [
    {
      id: 1,
      titulo: "Roca Rey anuncia nueva temporada 2026",
      imagen: "/Galeria/toreo/paul-kenny-mcgrath-PY0mtUTVX9I-unsplash.jpg",
      resumen: "El diestro peruano confirma más de 40 fechas por España y Francia.",
      fecha: "02/12/2025",
    },
    {
      id: 2,
      titulo: "La Maestranza presenta su cartel inaugural",
      imagen: "/Galeria/plazas/pierre-antona-H0vA-KTG9eA-unsplash.jpg",
      resumen: "Un cartel histórico con Morante, Aguado y Juan Ortega.",
      fecha: "30/11/2025",
    },
    {
      id: 3,
      titulo: "Jandilla lidia una corrida de indulto",
      imagen: "/Galeria/toros/Ftoro04.png",
      resumen: "Extraordinario juego de los toros de Jandilla en una tarde para recordar.",
      fecha: "27/11/2025",
    }
  ];

  return (
    <div className="news-container">
      <h1 className="news-title">Noticias Taurinas</h1>

      <div className="news-grid">
        {noticias.map(n => (
          <div key={n.id} className="news-card">
            <img src={n.imagen} alt={n.titulo} />
            <h2>{n.titulo}</h2>
            <p className="news-date">{n.fecha}</p>
            <p className="news-summary">{n.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
