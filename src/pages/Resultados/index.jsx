import "./Resultados.css";

export default function Resultados() {

  const corridas = [
    {
      id: 1,
      fecha: "01/12/2025",
      plaza: "Las Ventas",
      toreros: "Roca Rey – Manzanares – Talavante",
      ganaderia: "Victoriano del Río",
      resultado: "2 orejas – 1 oreja – ovación",
    },
    {
      id: 2,
      fecha: "28/11/2025",
      plaza: "La Maestranza",
      toreros: "Morante – Juan Ortega – Pablo Aguado",
      ganaderia: "Jandilla",
      resultado: "1 oreja – 1 oreja – silencio",
    },
    {
      id: 3,
      fecha: "20/11/2025",
      plaza: "Bilbao",
      toreros: "Urdiales – Emilio de Justo – Luque",
      ganaderia: "Miura",
      resultado: "ovación – 2 orejas – ovación",
    }
  ];

  return (
    <div className="result-container">
      <h1 className="result-title">Resultados Taurinos Recientes</h1>

      <div className="result-list">
        {corridas.map(c => (
          <div key={c.id} className="result-card">
            <h2>{c.plaza}</h2>
            <p><strong>Fecha:</strong> {c.fecha}</p>
            <p><strong>Toreros:</strong> {c.toreros}</p>
            <p><strong>Ganadería:</strong> {c.ganaderia}</p>
            <p><strong>Resultado:</strong> {c.resultado}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
