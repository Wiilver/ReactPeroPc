import Comentario from "./Comentario.jsx"
import Caja from "./Caja.jsx"
import foto_Jose from "./assets/Sandwich.jpg"
import foto_Armanda from "./assets/Pescado.jpg"
import foto_Pascal from "./assets/Malphite Whatsap.jpg"
function App() {
  return(
    <>
      <Comentario Fecha = "30/05/06"Nombre ="Jose Luis" Link="a.com" Foto = {foto_Jose} Texto = "Guau, como fan absoluto de los sandwiches esto rockea"/>
      <Comentario Fecha = "27/04/06"Nombre ="Armanda Josefina" Link="a.com" Foto = {foto_Armanda} Texto = "Guau, como fan absoluta de los pescados, esto zarandea"/>
      <Comentario Fecha = "13/11/98"Nombre ="Pascal Heredaz" Link="a.com" Foto = {foto_Pascal} Texto = "Rock Solid"/>
      <Caja Nombre = "Saul">
      </Caja>
    </>
  );
}

export default App
