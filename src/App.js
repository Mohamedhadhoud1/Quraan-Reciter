import logo from './logo.svg';
import './App.css';
import "./2.css";
import "./2"
import NavBar from './Components/NavBar';
import PlayerHeader from './Components/PlayerHeader';
import PlayerList from './Components/PlayerList';
import Hosary from './Components/Lists/HosaryList';
import HosaryImg from "./images/12128841321505649751.jpg"
import bannahImg from "./images/bannah.jpg"
import menshawyImg from "./images/menshawy.jpg"
import jibrelImg from "./images/gebreel.jpg"
import masharyImg from "./images/mashary.jpg"
import naserImg from "./images/naser.jpg"
import saadImg from "./images/Saad.jpg"
import AbdElBaset from './Components/Lists/AbdElBasetList';
import AbdElBasetImg from './images/artworks-000203326815-nxyzvx-t500x500.jpg';
import Bannah from './Components/Lists/Bannah';
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
import PageNotFound from './Components/PageNotFound';
import LinkedPlayerList from './Components/LinkedPlayerList';
import Menshawy from './Components/Lists/Menshawy';
import MJibrel from './Components/Lists/MJibrel';
import SaadAlGhamdy from './Components/Lists/SaadAlGhamdy';
import Mashary from './Components/Lists/Mashary';

function App() {
  const [j, setJ] = useState({value:1});
  const [h, setH] = useState({value:1});
  const [quarter,setQuarter]=useState();
  const [rere,setRere]=useState();
  const localizer = useLocalizer();
  const params = useParams();
 function getquarter(quarter){
setQuarter(quarter)
console.log("app",quarter)
 }
  return (
    <div className="App">
     
       <NavBar></NavBar>
      
      <div id="main">
     

        <div className='select' >
        <Select
        defaultValue={1}
        isSearchable={false}
        placeholder="اختر الجزء"
        onChange={(option)=>setJ(option)}
        options={[{value: 1, label: 'الجزء الاول' }, { value: 2, label: 'الجزء الثاني' },{value: 3, label: 'الجزء الثالث' }, { value: 4, label: 'الجزء الرابع' },{value: 5, label: 'الجزء الخامس' }, { value: 6, label: 'الجزء السادس' },{value: 7, label: 'الجزء السابع' }, { value: 8, label: 'الجزء الثامن' },{value: 9, label: 'الجزء التاسع' }, { value: 10, label: 'الجزء العاشر' },{value: 11, label: 'الجزء الحادي عشر' }, { value: 12, label: 'الجزء الثاني عشر' },{value: 13, label: 'الجزء الثالث عشر' }, { value: 14, label: 'الجزء الرابع عشر' },{value: 15, label: 'الجزء الخامس عشر' }, { value: 16, label: 'الجزء السادس عشر' },{value: 17, label: 'الجزء السابع عشر' }, { value: 18, label: 'الجزء الثامن عشر' },{value: 19, label: 'الجزء التاسع عشر' }, { value: 20, label: 'الجزء العشرون' },{value: 21, label: 'الجزء الحادي والعشرون' }, { value: 22, label: ' الجزء الثاني والعشرون' },{value: 23, label: 'الجزء الثالث والعشرون' }, { value: 24, label: ' الجزء الرابع والعشرون' },{value: 25, label: 'الجزء الخامس والعشرون' }, { value: 26, label: ' الجزء السادس والعشرون' },{value: 27, label: 'الجزء السابع والعشرون' }, { value: 28, label: ' الجزء الثامن والعشرون' },{value: 29, label: 'الجزء التاسع والعشرون' }, { value: 30, label: ' الجزء  الثلاثون' }]}
      />
      <Select
        defaultValue={1}
        isSearchable={false}
        placeholder="اختر الحزب"
        onChange={(option)=>setH(option)}
        options={[{value: 1, label: 'الحزب الاول' },
        { value: 2, label: 'الحزب الثاني' }]}
      />
      </div>
      <div className='quarter-text' style={quarter?{display:"block"}:{display:"none"}}>
      {
       
       quarter
       ? quarter.map((ayah, index) => (
           <p key={index}>{ayah.text}</p>
         ))
       : ""
    }
    </div>
      <div className="player" id="player">
      
<Routes>
      <Route exact path='/' element={<><PlayerHeader img={HosaryImg} namear={" الحصري"}></PlayerHeader>
      <LinkedPlayerList getquarter={getquarter} name={"Al Hosary"} namear={" الحصري"} identifier={"rabieaaa2042_gmail_2131346134613461346"}  img={HosaryImg} Shikh={Hosary} j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
     

      <Route exact path='/AbdElBaset' element={<><PlayerHeader img={AbdElBasetImg} namear={"عبدالباسط عبدالصمد"}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"AbdElBaset"} namear={"عبدالباسط عبدالصمد"} identifier={"abd--albaset---moratal---by--radio---by--arba3--to--033-altawbah--mp3--full--m"}  img={AbdElBasetImg} Shikh={AbdElBaset} j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      
      <Route exact path='/Bannah' element={<><PlayerHeader img={bannahImg} namear={"محمود علي البنا"}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"Bannah"} identifier={"zzz122_20220305zzz"} namear={"محمود علي البنا"} Shikh={Bannah}  img={bannahImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>

      <Route exact path='/Menshawy' element={<><PlayerHeader img={menshawyImg} namear={"محمد صديق المنشاوي"}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"Menshawy"} identifier={"zzzz096-r-04-h-24zzz"} namear={"محمد صديق المنشاوي"} Shikh={Menshawy}  img={menshawyImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      <Route exact path='/Jibrel' element={<><PlayerHeader img={jibrelImg} namear={"محمد جبريل "}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"M.Jibrel"} identifier={"241-doaazzzzzz"} namear={"محمد جبريل "} Shikh={MJibrel}  img={jibrelImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      <Route exact path='/Katamy' element={<><PlayerHeader img={naserImg} namear={"ناصر القطامي"}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"Naser Al Kattamy"} identifier={"full-quran-128kb-high-quality-240-part-by-naser-alqattami--mp3"} namear={"ناصر القطامي"} Shikh={Hosary}  img={naserImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      <Route exact path='/Saad' element={<><PlayerHeader img={saadImg} namear={"سعد الغامدي "}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"Saad Al Ghamdy"} identifier={"quran-by-sa3d-alghamdi--morattal-64-kb-high-quality-quran-full-240-part-arbaa3"} namear={"سعد الغامدي "} Shikh={SaadAlGhamdy}  img={saadImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      <Route exact path='/Mashary' element={<><PlayerHeader img={masharyImg} namear={"مشاري راشد العفاسي"}></PlayerHeader>
          <LinkedPlayerList getquarter={getquarter} name={"Mashary Rashed"} identifier={"128kb----mshary---alafasy--by--md---almonfasel---mp3--full--mushaf--quran--240"} namear={"مشاري راشد العفاسي"} Shikh={Mashary}  img={masharyImg}  j={j.label} h={h.label} start={((j.value-1)*8)+((h.value-1)*4)} end={((j.value-1)*8)+((h.value-1)*4)+4}></LinkedPlayerList></>}>
      </Route>
      
      <Route path="*" element={<PageNotFound />} />
</Routes>
      
    
    </div>
        </div>
        <p className='pp'>🤲 صدقة جارية لأمي غفر الله لها </p>
    </div>
  );
}

export default App;
