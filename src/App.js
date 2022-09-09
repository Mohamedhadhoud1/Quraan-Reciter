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
import AbdElBasetImg from './images/artworks-000203326815-nxyzvx-t500x500.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import React, { useState } from 'react';
import Select from 'react-select';
import useLocalizer from "./Localization/useLocalizer";

function App() {
  const [j, setJ] = useState({value:1});
  const [h, setH] = useState({value:1});
  const localizer = useLocalizer();
  const params = useParams();

  return (
    <div className="App">
     
       <NavBar></NavBar>
      
      <div id="main">
      
        <div className='select'>
        <Select
        defaultValue={1}
        placeholder="اختر الجزء"
        onChange={(option)=>setJ(option)}
        options={[{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 3, label: 'الجزء الثالث' }, { value: 4, label: 'الجزء الرابع' },{value: 5, label: 'الجزء الخامس' }, { value: 6, label: 'الجزء السادس' },{value: 7, label: 'الجزء السابع' }, { value: 8, label: 'الجزء الثامن' },{value: 9, label: 'الجزء التاسع' }, { value: 10, label: 'الجزء العاشر' },{value: 11, label: 'الجزء الحادي عشر' }, { value: 12, label: 'الجزء الثاني عشر' },{value: 13, label: 'الجزء الثالث عشر' }, { value: 14, label: 'الجزء الرابع عشر' },{value: 15, label: 'الجزء الخامس عشر' }, { value: 16, label: 'الجزء السادس عشر' },{value: 17, label: 'الجزء السابع عشر' }, { value: 18, label: 'الجزء الثامن عشر' },{value: 19, label: 'الجزء التاسع عشر' }, { value: 20, label: 'الجزء العشرون' },{value: 21, label: 'الجزء الحادي والعشرون' }, { value: 22, label: ' الجزء الثاني والعشرون' },{value: 23, label: 'الجزء الثالث والعشرون' }, { value: 24, label: ' الجزء الرابع والعشرون' },{value: 25, label: 'الجزء الخامس والعشرون' }, { value: 26, label: ' الجزء السادس والعشرون' },{value: 27, label: 'الجزء السابع والعشرون' }, { value: 28, label: ' الجزء الثامن والعشرون' },{value: 29, label: 'الجزء التاسع والعشرون' }, { value: 30, label: ' الجزء  الثلاثون' }]}
      />
      <Select
        defaultValue={1}
        placeholder="اختر الحزب"
        onChange={(option)=>setH(option)}
        options={[{value: 1, label: 'الحزب الاول' },
        { value: 2, label: 'الحزب الثاني' }]}
      />
      </div>
      <div className="player" id="player">
        
<Routes>
      <Route exact path='/:lid/Hosary' element={<><PlayerHeader img={HosaryImg}></PlayerHeader>
         <PlayerList name={"Hosary"} img={HosaryImg} Shikh={Hosary} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></PlayerList></>}>
      </Route>
     

      <Route exact path='/:lid/AbdElBaset' element={<><PlayerHeader img={AbdElBasetImg}></PlayerHeader>
          <PlayerList name={"AbdElBaset"}  img={AbdElBasetImg} Shikh={AbdElBaset} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></PlayerList></>}>
      </Route>
</Routes>
      
    
    </div>
        </div>
    </div>
  );
}

export default App;
