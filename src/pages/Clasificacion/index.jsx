import "./Clasificacion.css";

export default function Clasificacion() {
  return (
    <div className="clasificacion-container">

      <h1 className="titulo">📊 Clasificación Taurina</h1>
      <p className="intro">
        Estadísticas generales basadas en triunfos, puertas grandes, orejas,
        ganaderías destacadas y rendimiento por faenas.
      </p>

      <div className="tabla-bloque">
        <h2>Ranking de Toreros</h2>
        <table>
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Matador</th>
              <th>Orejas</th>
              <th>Puertas Grandes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td><td>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td>2</td><td>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td>3</td><td>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabla-bloque">
        <h2>Ranking de Ganaderías</h2>
        <table>
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Ganadería</th>
              <th>Mejor Toro</th>
              <th>Puntuación Media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td><td>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td>2</td><td>—</td><td>—</td><td>—</td>
            </tr>
            <tr>
              <td>3</td><td>—</td><td>—</td><td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
