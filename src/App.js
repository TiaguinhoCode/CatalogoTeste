import './App.css';
import { PostCard } from './component/PostCard/Post';
import ReactWhatsapp from 'react-whatsapp';
import { Search } from './component/textinput/Search';
import { useState } from 'react';

export default function App() {

  const [busca, setBusca] = useState('');
  
  console.log(busca)

  return (
    <div className="App">
      <div className='search-container'>
        <Search busca={busca}/>
      </div>

      <section className="container">
        <PostCard />
        <div className='icon-whatsapp'>
          <ReactWhatsapp number="(85) 98780-5592" message="Hello World!!!">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </ReactWhatsapp>
        </div>
      </section>

    </div>
  );
}

