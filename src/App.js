import './App.css';
import alface from './assets/alface.png'
import beterraba from './assets/beterraba.png'
import cenoura from './assets/cenoura.png'
import cereja from './assets/cereja.png'
import laranja from './assets/laranja.png'
import limao from './assets/limao.png'
import manga from './assets/manga.png'
import tomate from './assets/tomate.png'
import Carrinho from './components/Carrinho';

const imgs = [alface, beterraba, cenoura, cereja, laranja, limao, manga, tomate]
function retornaNome(img) {
  /* os arquivos costumam ser algo do tipo "static/media/vegetal.numero.png"
  * o método abaixo apenas seleciona a string "vegetal"
  */
  return String(img).split('/')[3].split('.')[0]
}

function exibeImg(img) {
  return (<img className="vegetais-img" src={img} alt={retornaNome(img)} />)
}

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>HORTIFRUTI</h1>
        <h2>VNW</h2>
      </div>
      <main>
        <h2>Nossos produtos</h2>
        <section className="produtos-carrinho">
          <div className="img-container">
            {imgs.map(exibeImg)}
          </div>
          <div className="carrinho-container">
            <Carrinho></Carrinho>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
