import React from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Três conceitos do React:
/*
  Componentes:
    * Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
  Propriedades:
    * Informações que um componente PAI passa para o componente FILHO.
  Estados:
    * Informações mantidas pelo componente (Lembrar: Imutabilidade).
*/

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/25726888?s=460&v=4" alt="Rick Elton" />

              <div className="user-info">
                <strong>Rickecr</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Trabalho com Machine Learning. Sou estudando do curso de Ciência da Computação na @ufcg e pesquisador/desenvolvedor no @lsi-ufcg.</p>
            <a href="https://github.com/rickecr">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/25726888?s=460&v=4" alt="Rick Elton" />

              <div className="user-info">
                <strong>Rickecr</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Trabalho com Machine Learning. Sou estudando do curso de Ciência da Computação na @ufcg e pesquisador/desenvolvedor no @lsi-ufcg.</p>
            <a href="https://github.com/rickecr">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/25726888?s=460&v=4" alt="Rick Elton" />

              <div className="user-info">
                <strong>Rickecr</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Trabalho com Machine Learning. Sou estudando do curso de Ciência da Computação na @ufcg e pesquisador/desenvolvedor no @lsi-ufcg.</p>
            <a href="https://github.com/rickecr">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/25726888?s=460&v=4" alt="Rick Elton" />

              <div className="user-info">
                <strong>Rickecr</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Trabalho com Machine Learning. Sou estudando do curso de Ciência da Computação na @ufcg e pesquisador/desenvolvedor no @lsi-ufcg.</p>
            <a href="https://github.com/rickecr">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
