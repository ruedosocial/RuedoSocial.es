import "./Ganaderias.css";

export default function Ganaderias() {

  const lista = [
    {
      id: 1,
      nombre: "Victorino Martín",
      hierro: "/Galeria/toros/Ftoro01.png",
      encaste: "Albaserrada",
      notas: "Hierro legendario, toros serios y exigentes."
    },
    {
      id: 2,
      nombre: "Jandilla",
      hierro: "/Galeria/toros/Ftoro02.png",
      encaste: "Domecq",
      notas: "Toros con transmisión y bravura moderna."
    },
    {
      id: 3,
      nombre: "Miura",
      hierro: "/Galeria/toros/Ftoro03.png",
      encaste: "Cabrera",
      notas: "Impresionantes por trapío, duros y temibles."
    }
  ];

  return (
    <div className="ganaderias-container">
      <h1 className="ganaderias-title">Ganaderías</h1>

      <div className="ganaderias-grid">
        {lista.map(g => (
          <div key={g.id} className="ganaderia-card">
            <img src={g.hierro} className="ganaderia-img" />
            <h2>{g.nombre}</h2>
            <p className="encaste">{g.encaste}</p>
            <p className="notas">{g.notas}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
