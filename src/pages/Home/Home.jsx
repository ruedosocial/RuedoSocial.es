export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <img
        src="/Galeria/fondocompleto/fcmadrid02.jpg?v=9999999"
        alt="Fondo Home"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "60px",
          color: "#fff"
        }}
      >
        <h1>Bienvenido a RuedoSocial</h1>
        <p>La nueva plaza digital de la afición taurina.</p>
      </div>
    </div>
  );
}
