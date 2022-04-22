import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/cardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/272047752_4910456652309473_907142253190189696_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEyjfvXJPjVEXMNYTbxVRUrQjNzymhOEBRCM3PKaE4QFMo-GtBs3MvupNmFkp1JK9vXLJziYyhuNgu5wTGlEhqm&_nc_ohc=103umVkvwTkAX8FMS-i&_nc_ht=scontent.fsdu1-1.fna&oh=00_AT-EMux1_0JIQsVRJmmA04YDJLyPprc_H-909YGlRmMRlQ&oe=626378C2" 
          nome="Larissa de Castro Azevedo" 
          descricao="Oi, eu sou a Larissa. Tenho 28 anos e estou em transição de carreira do mundo jurídico para o mundo da tecnologia. Sou estudante de Desenvolvimento Web Full Stack da Labenu e Desenvolvedora Iniciante na Loggi."
        />
        
        <ImagemButton 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGd7LVtvIb5pDb36V6lLlWsDIEukxysQ3cEw&usqp=CAU" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>E-mail e endereço</h2>
        <CardPequeno

        imagem= "https://i.pinimg.com/736x/99/28/d1/9928d136b30dc36dfd859594130b7c26.jpg"
        email="E-mail: castrodelari@gmail.com"
        />

        <CardPequeno

        imagem= "https://cdn-icons-png.flaticon.com/512/1275/1275228.png"
        endereco="Endereço: Macaé, RJ | Trabalho Remoto"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYfLtZdwmSOWH6HNnT2Syzv5S-JM5z5YLE7JAbVOF9ctESEWVYd65VeS_9vU8GrOscmU&usqp=CAU"
          nome="Loggi" 
          descricao="Desenvolvedora Iniciante com bolsa de Estudante Web FullStack Labenu." 
        />
        
        <CardGrande 
          imagem="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-attorney-law-scale-icon-design-template-vector-png-image_770961.jpg" 
          nome="Advogada" 
          descricao="Com atuação jurídica de 2019 a janeiro/2022." 
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
