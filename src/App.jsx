import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tipka from './assets/Tipka.jsx'
import Klub from './assets/Klub.jsx';
import Hajduk from './assets/hajduk.png';
import Dinamo from './assets/Dinamo.png';
import Stoperica from './assets/Stoperica.jsx';
import Datum from './assets/Datum.jsx';
import Uvecaj from './assets/Uvecaj.jsx';
import Umanji from './assets/Umanji.jsx';
import Restart from './assets/Restart.jsx'

function App() {

  return (
    <div>
      <Stoperica/>
    </div>
  )
}

export default App














// import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Tipka from './assets/Tipka.jsx'
// import Klub from './assets/Klub.jsx';
// import Hajduk from './assets/hajduk.png';
// import Dinamo from './assets/Dinamo.png';
// import Stoperica from './assets/Stoperica.jsx';
// import Datum from './assets/Datum.jsx';
// import Uvecaj from './assets/Uvecaj.jsx';
// import Umanji from './assets/Umanji.jsx';
// import Restart from './assets/Restart.jsx'

// function App() {

//   const [rez1, PostaviRez1] = useState(0);
//   const [rez2, PostaviRez2] = useState(0);
//   const [kartonZuti1, PostaviKartonZuti1] = useState(0);
//   const [kartonZuti2, PostaviKartonZuti2] = useState(0);
//   const [kartonCrveni1, PostaviKartonCrveni1] = useState(0);
//   const [kartonCrveni2, PostaviKartonCrveni2] = useState(0);
//   const [udarci1, PostaviUdarci1] = useState(0);
//   const [udarci2, PostaviUdarci2] = useState(0);
//   const [udarciOkvir1, PostaviUdarciOkvir1] = useState(0);
//   const [udarciOkvir2, PostaviUdarciOkvir2] = useState(0);
//   const [prekrsaji1, PostaviPrekrsaji1] = useState(0);
//   const [prekrsaji2, PostaviPrekrsaji2] = useState(0);
//   const [korner1, PostaviKorner1] = useState(0);
//   const [korner2, PostaviKorner2] = useState(0);
//   const [zaleda1, PostaviZaleda1] = useState(0);
//   const [zaleda2, PostaviZaleda2] = useState(0);
//   const [dodavanja1, PostaviDodavanja1] = useState(0);
//   const [dodavanja2, PostaviDodavanja2] = useState(0);

//   const resetState = () => {
//     PostaviRez1(0);
//     PostaviUdarci1(0);
//     PostaviUdarciOkvir1(0);
//     PostaviPrekrsaji1(0);
//     PostaviKartonZuti1(0);
//     PostaviKartonCrveni1(0);
//     PostaviDodavanja1(0);
//     PostaviKorner1(0);
//     PostaviZaleda1(0);
//     PostaviRez2(0);
//     PostaviUdarci2(0);
//     PostaviUdarciOkvir2(0);
//     PostaviPrekrsaji2(0);
//     PostaviKartonZuti2(0);
//     PostaviKartonCrveni2(0);
//     PostaviDodavanja2(0);
//     PostaviKorner2(0);
//     PostaviZaleda2(0);

//   };

//   return (
//     <div>
//       <div id="Glavni">
//         <Datum />
//         <div id="izgled">
//           <div  id="prviKlub">
//             <img className='slk' src={Hajduk} alt="Hajduk Split" width="100px" height="100px"/>
//             <Klub ime="Hajduk"></Klub>
//           </div>
//           <div className='plusMinus'>
//             <Tipka akcija={() => Uvecaj([rez1, PostaviRez1])} akcija1={() => Umanji([rez1, PostaviRez1])} natpis1="-" natpis2="+" rezultat={rez1}/>
//           </div>
//           <h2>:</h2>
//           <div className='plusMinus'>
//           <Tipka akcija={() => Uvecaj([rez2, PostaviRez2])} akcija1={() => Umanji([rez2, PostaviRez2])} natpis1="-" natpis2="+" rezultat={rez2}/>
//           </div>
//           <div id="drugiKlub">
//             <img className='slk' src={Dinamo} alt="Dinamo Zagreb" width="100px" height="100px"/>
//             <Klub ime="Dinamo"></Klub>
//           </div>
//         </div>
//         <div id="stoper">
//           <Stoperica/>
//         </div>
//         <hr></hr>
//         <div className="statistika">
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([udarci1, PostaviUdarci1])} akcija1={() => Umanji([udarci1, PostaviUdarci1])} natpis1="-" natpis2="+" rezultat={udarci1}/>
//             <h3>Udarci</h3>
//             <Tipka akcija={() => Uvecaj([udarci2, PostaviUdarci2])} akcija1={() => Umanji([udarci2, PostaviUdarci2])} natpis1="-" natpis2="+" rezultat={udarci2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([udarciOkvir1, PostaviUdarciOkvir1])} akcija1={() => Umanji([udarciOkvir1, PostaviUdarciOkvir1])} natpis1="-" natpis2="+" rezultat={udarciOkvir1}/>
//             <h3>Udarci u okvir</h3>
//             <Tipka akcija={() => Uvecaj([udarciOkvir2, PostaviUdarciOkvir2])} akcija1={() => Umanji([udarciOkvir2, PostaviUdarciOkvir2])} natpis1="-" natpis2="+" rezultat={udarciOkvir2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([prekrsaji1, PostaviPrekrsaji1])} akcija1={() => Umanji([prekrsaji1, PostaviPrekrsaji1])} natpis1="-" natpis2="+" rezultat={prekrsaji1}/>
//             <h3>Prekrsaji</h3>
//             <Tipka akcija={() => Uvecaj([prekrsaji2, PostaviPrekrsaji2])} akcija1={() => Umanji([prekrsaji2, PostaviPrekrsaji2])} natpis1="-" natpis2="+" rezultat={prekrsaji2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([kartonZuti1, PostaviKartonZuti1])} akcija1={() => Umanji([kartonZuti1, PostaviKartonZuti1])} natpis1="-" natpis2="+" rezultat={kartonZuti1}/>
//             <h3>Zuti kartoni</h3>
//             <Tipka akcija={() => Uvecaj([kartonZuti2, PostaviKartonZuti2])} akcija1={() => Umanji([kartonZuti2, PostaviKartonZuti2])} natpis1="-" natpis2="+" rezultat={kartonZuti2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([kartonCrveni1, PostaviKartonCrveni1])} akcija1={() => Umanji([kartonCrveni1, PostaviKartonCrveni1])} natpis1="-" natpis2="+" rezultat={kartonCrveni1}/>
//             <h3>Crveni kartoni</h3>
//             <Tipka akcija={() => Uvecaj([kartonCrveni2, PostaviKartonCrveni2])} akcija1={() => Umanji([kartonCrveni2, PostaviKartonCrveni2])} natpis1="-" natpis2="+" rezultat={kartonCrveni2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([dodavanja1, PostaviDodavanja1])} akcija1={() => Umanji([dodavanja1, PostaviDodavanja1])} natpis1="-" natpis2="+" rezultat={dodavanja1}/>
//             <h3>Dodavanja</h3>
//             <Tipka akcija={() => Uvecaj([dodavanja2, PostaviDodavanja2])} akcija1={() => Umanji([dodavanja2, PostaviDodavanja2])} natpis1="-" natpis2="+" rezultat={dodavanja2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([korner1, PostaviKorner1])} akcija1={() => Umanji([korner1, PostaviKorner1])} natpis1="-" natpis2="+" rezultat={korner1}/>
//             <h3>Korneri</h3>
//             <Tipka akcija={() => Uvecaj([korner2, PostaviKorner2])} akcija1={() => Umanji([korner2, PostaviKorner2])} natpis1="-" natpis2="+" rezultat={korner2}/>
//           </div>
//           <div className="podstatistika">
//             <Tipka akcija={() => Uvecaj([zaleda1, PostaviZaleda1])} akcija1={() => Umanji([zaleda1, PostaviZaleda1])} natpis1="-" natpis2="+" rezultat={zaleda1}/>
//             <h3>Zalede</h3>
//             <Tipka akcija={() => Uvecaj([zaleda2, PostaviZaleda2])} akcija1={() => Umanji([zaleda2, PostaviZaleda2])} natpis1="-" natpis2="+" rezultat={zaleda2}/>
//           </div>
//         </div>
//         <button id="zadano" onClick={resetState}>
//           Postavi na zadano!
//           </button>
//       </div>
//     </div>
//   )
// }

// export default App






