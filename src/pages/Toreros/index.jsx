import "./Toreros.css";

export default function Toreros() {

  const listaToreros = [
    {
      id: 1,
      nombre: "Roca Rey",
      apodo: "El Huracán",
      imagen: "/Galeria/toreros/Ftorerook.jpg",
      estilo: "Valiente, poderoso, impactante",
    },
    {
      id: 2,
      nombre: "Talavante",
      apodo: "El Mago",
      imagen: "/Galeria/toreros/Ftorerook3.jpg",
      estilo: "Artístico, inspirado, profundo",
    },
    {
      id: 3,
      nombre: "Morante de la Puebla",
      apodo: "El Genio",
      imagen: "/Galeria/toreros/Ftorerook1.jpg",
      estilo: "Clásico, elegante, puro",
    }
  ];

  return (
    <div className="toreros-container">
      <h1 className="toreros-title">Figuras del Toreo</h1>

      <div className="toreros-grid">
        {listaToreros.map(t => (
          <div key={t.id} className="torero-card">
            <img src={t.imagen} alt={t.nombre} className="torero-img" />
            <h2>{t.nombre}</h2>
            <p className="torero-apodo">{t.apodo}</p>
            <p className="torero-estilo">{t.estilo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
