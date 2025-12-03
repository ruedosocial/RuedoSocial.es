import "./Noticias.css";

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "— Título de noticia taurina —",
      fecha: "—",
      img: "/Galeria/toreo/wallpaperbetter.com_1920x1080.jpg"
    },
    {
      id: 2,
      titulo: "— Otra noticia destacada —",
      fecha: "—",
      img: "/Galeria/toreros/Ftorerook5.jpg"
    },
    {
      id: 3,
      titulo: "— Última hora taurina —",
      fecha: "—",
      img: "/Galeria/plazas/pierre-antona-H0vA-KTG9eA-unsplash.jpg"
    }
  ];

  return (
    <div className="noticias-container">
      <h1 className="titulo">📰 Noticias</h1>

      <div className="grid">
        {noticias.map(noticia => (
          <div key={noticia.id} className="card">
            <img src={noticia.img} alt={noticia.titulo} />
            <div className="contenido">
              <h2>{noticia.titulo}</h2>
              <p className="fecha">{noticia.fecha}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
