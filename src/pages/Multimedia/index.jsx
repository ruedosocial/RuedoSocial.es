import "./Multimedia.css";

export default function Multimedia() {

  const fotos = [
    "/Galeria/toreo/stephane-yaich-eAE9ZYPZXrU-unsplash.jpg",
    "/Galeria/toreo/paul-kenny-mcgrath-PY0mtUTVX9I-unsplash.jpg",
    "/Galeria/plazas/pierre-antona-H0vA-KTG9eA-unsplash.jpg",
    "/Galeria/toreros/Ftorerook3.jpg",
    "/Galeria/toros/Ftoro09.png",
    "/Galeria/plazas/pexels-quentin-martinez-2147503099-29749222.jpg",
    "/Galeria/toreros/gavia-FgbUS58qORc-unsplash.jpg",
    "/Galeria/toros/Ftoro20.jpg"
  ];

  return (
    <div className="multimedia-container">
      <h1 className="titulo">🎥 Multimedia</h1>

      <div className="grid">
        {fotos.map((img, i) => (
          <div key={i} className="item">
            <img src={img} alt={"foto " + i} />
          </div>
        ))}
      </div>
    </div>
  );
}
