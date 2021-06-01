import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import fotoPessoal from './img/foto-pessoal.jpg'
import ImagemButton from './components/ImagemButton';
import bancoDoBrasil from './img/bancoDoBrasil.jpg';
import CardPequeno from './components/CardPequeno';
import imagemEmail from './img/email.png'
import enderecoResidencial from './img/endereco-residencial.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPessoal} 
          nome="Izabella Christina Brandão Silva" 
          descricao="Oi, eu sou a Izabella. Atualmente sou estudante de desenvolvedor web full stack na labenu, sou formada em Engenharia Civil e Sistemas de Informação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Endereço de E-mail e Residencial</h2>
        <CardPequeno 
          icone={imagemEmail} 
          endereco="bellacbrandao@gmail.com" 
        />        

        <CardPequeno
          icone={enderecoResidencial} 
          endereco="Rua Antonio Froes, 113, Centro. Bocaiuva-MG" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={bancoDoBrasil} 
          nome="Banco do Brasil" 
          descricao="Escrituária" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
