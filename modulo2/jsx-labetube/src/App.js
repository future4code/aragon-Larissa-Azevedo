import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = "Título do Vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Future Tube</h1>
            <input type="text" placeholder="Busca &#128270;" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                    <button className='botao' onClick={reproduzVideo} >
                      ▶ PLAY
                    </button>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;