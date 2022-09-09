import logo from './logo.svg';
import './App.css';
import "./2.css";
import "./2"
import NavBar from './Components/NavBar';
import PlayerHeader from './Components/PlayerHeader';
import PlayerList from './Components/PlayerList';
import Hosary from './Components/Lists/HosaryList';
import HosaryImg from "./images/12128841321505649751.jpg"
import AbdElBaset from './Components/Lists/AbdElBasetList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import React, { useState } from 'react';
import Select from 'react-select';
function App() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  return (
    <div className="App">
     
       <NavBar></NavBar>
      
      <div id="main">
        <div className='select'>
        <Select
        defaultValue={selectedOption1}
        onChange={setSelectedOption1}
        options={[{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 3, label: 'الجزء الثالث' }, { value: 4, label: 'الجزء الرابع' },{value: 5, label: 'الجزء الخامس' }, { value: 6, label: 'الجزء السادس' },{value: 7, label: 'الجزء السابع' }, { value: 8, label: 'الجزء الثامن' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' }]}
      />
      <Select
        defaultValue={selectedOption2}
        onChange={setSelectedOption2}
        options={[{value: 1, label: 'الحزب الاول' },
        { value: 2, label: 'الحزب الثاني' }]}
      />
      </div>
      <div class="player" id="player">
        
<Routes>
      <Route exact path='/' element={<><PlayerHeader img={HosaryImg}></PlayerHeader>
         <PlayerList name={"Hosary"} img={HosaryImg} Shikh={Hosary}></PlayerList></>}>
      </Route>
     

      <Route exact path='/AbdElBaset' element={<><PlayerHeader></PlayerHeader>
          <PlayerList name={"AbdElBaset"}  Shikh={AbdElBaset}></PlayerList></>}>
      </Route>
</Routes>
      
    
    </div>
        </div>
    </div>
  );
}

export default App;
