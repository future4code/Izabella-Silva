import logoYoutube from './img/logo-youtube.png';
import lupaPesquisa from './img/lupa-pesquisa.png';
import login from './img/login.png';
import inicio from './img/home.png';
import explorar from './img/explorar.png';
import inscricoes from './img/inscricao.png';
import biblioteca from './img/biblioteca.png';
import historico from './img/historico.png';

import './App.css';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1><img src={logoYoutube} alt="logo youtube"/><p>Lab Tube</p></h1>
            <div id="campoDePesquisaELupa">
              <input type="text" placeholder="Busca" id="campoDeBusca"/>
              <img src={lupaPesquisa} alt="Lupa de pesquisa" id="lupaDePesquisa"/>
            </div>
            <button className="botao-login"><img src={login} alt="login"/><p>Fazer Login</p></button>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-menu-vertical"><img src={inicio} alt="inicio"/><p>Início</p></li>
                    <li className="botoes-menu-vertical"><img src={explorar} alt="explorar"/><p>Explorar</p></li>
                    <li className="botoes-menu-vertical"><img src={inscricoes} alt="inscricoes"/><p>Inscrições</p></li>
                    <hr/>
                    <li className="botoes-menu-vertical"><img src={biblioteca} alt="biblioteca"/><p>Biblioteca</p></li>
                    <li className="botoes-menu-vertical"><img src={historico} alt="historico"/><p>Histórico</p></li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
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
