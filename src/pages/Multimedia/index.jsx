import "./Multimedia.css";

export default function Multimedia() {
  const videos = [
    {
      id: 1,
      titulo: "Faena histórica de Morante",
      miniatura: "/Galeria/toreo/stephane-yaich-eAE9ZYPZXrU-unsplash.jpg",
    },
    {
      id: 2,
      titulo: "Recorte espectacular en Zaragoza",
      miniatura: "/Galeria/toreo/paul-kenny-mcgrath-kf_fCURx3_E-unsplash.jpg",
    },
    {
      id: 3,
      titulo: "El toro 'Cobradiezmos'",
      miniatura: "/Galeria/toros/Ftoro11.png",
    }
  ];

  const fotos = [
    "/Galeria/plazas/pierre-antona-H0vA-KTG9eA-unsplash.jpg",
    "/Galeria/plazas/pexels-amat-30403107.jpg",
    "/Galeria/plazas/pexels-jcosta-20877142.jpg",
    "/Galeria/toreros/Ftorerook3.jpg",
    "/Galeria/toreo/wallpaperbetter.com_1920x1080.jpg"
  ];

  return (
    <div className="multimedia-container">
      
      <h1 className="titulo">📸 & 🎥 Multimedia</h1>

      <h2 className="sub">Vídeos</h2>
      <div className="multimedia-grid">
        {videos.map(v => (
          <div key={v.id} className="card">
            <img src={v.miniatura} alt={v.titulo} />
            <p>{v.titulo}</p>
          </div>
        ))}
      </div>

      <h2 className="sub">Galería Fotográfica</h2>
      <div className="multimedia-grid">
        {fotos.map((f, i) => (
          <div key={i} className="card">
            <img src={f} alt="Foto" />
          </div>
        ))}
      </div>

    </div>
  );
}
