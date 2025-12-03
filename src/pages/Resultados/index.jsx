import "./Resultados.css";

export default function Resultados() {
  return (
    <div className="resultados-container">

      <h1 className="titulo">📝 Resultados de la Temporada</h1>
      <p className="intro">
        Consulta los resultados de festejos, puertas grandes, trofeos,
        puntuaciones de ganaderías y actuaciones destacadas.
      </p>

      <div className="bloque">
        <h2>Últimos festejos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Plaza</th>
              <th>Ganadería</th>
              <th>Matadores</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bloque">
        <h2>Triunfadores recientes</h2>
        <ul className="lista">
          <li>• —</li>
          <li>• —</li>
          <li>• —</li>
        </ul>
      </div>

    </div>
  );
}
