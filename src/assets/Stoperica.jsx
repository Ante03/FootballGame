import React, { useState, useRef, useEffect } from "react"
import './Stoperica.css'
import Hajduk from './hajduk.png';
import Dinamo from './Dinamo.png';
import Tipka from './Tipka.jsx'
import Klub from './Klub.jsx';
import Uvecaj from './Uvecaj.jsx';
import Umanji from './Umanji.jsx';
import Datum from './Datum.jsx';

function Stoperica(){

    const [isRuning, setRuning] = useState(false);
    const [proslo, setProslo] = useState(0);
    const Interval = useRef(null);
    const trenutno = useRef(0);
    
    const [rez1, PostaviRez1] = useState(0);
    const [rez2, PostaviRez2] = useState(0);

    useEffect(() => {
        if(isRuning){
            Interval.current = setInterval(() => {
                setProslo(Date.now() - trenutno.current);
            }, 1000);
        }
        return () => clearInterval(Interval.current);
    },[isRuning])

    function Start(){
        setRuning(true);
        trenutno.current = Date.now() - proslo;
    }

    function Restart(){
        setRuning(false);
        setProslo(0);
    }

    function Stop(){
        setRuning(false);
    }

    function FormatTime(){
        let minute = Math.floor(proslo / (1000 * 60) % 60);
        let sekunde = Math.floor(proslo / (1000) % 60);
        let poluvrijeme = "";
        if(minute < 45){
            poluvrijeme = "1. pol"
        }
        else if(minute >= 45 && minute < 90){
            poluvrijeme = "2. pol"
        }
        else{
            poluvrijeme = "KRAJ"
            Stop();
        }

        return `${poluvrijeme} ${dodajNulu(minute)}:${dodajNulu(sekunde)}`
    }

    let minute = Math.floor(proslo / (1000 * 60) % 60);

    function UvecajGol([a, SetA], [b, SetB],minute){
        if (!isRuning) {
            return;
        }
        return (
            <div>
                {SetA(prevA => prevA + 1)}
                {SetB(prevB => [...prevB, minute])};
            </div>
        )
    }

    function UmanjiGol([a, SetA], [b, SetB]){
        if (!isRuning) {
            return;
        }
        if(a <= 0){
            return(
                SetA(0)
            )
        }
        
         return (
             <div>
                 {SetA(prevA => prevA - 1)}
                 {SetB(prevB => {
                    const noviB = [...prevB];
                    noviB.pop();
                    return noviB;
                })};
             </div>
         )
     }

    function dodajNulu(broj){
        return (broj < 10 ? "0" : "") + broj;
    }
    
    const [kartonZuti1, PostaviKartonZuti1] = useState(0);
    const [kartonZuti2, PostaviKartonZuti2] = useState(0);
    const [kartonCrveni1, PostaviKartonCrveni1] = useState(0);
    const [kartonCrveni2, PostaviKartonCrveni2] = useState(0);
    const [udarci1, PostaviUdarci1] = useState(0);
    const [udarci2, PostaviUdarci2] = useState(0);
    const [udarciOkvir1, PostaviUdarciOkvir1] = useState(0);
    const [udarciOkvir2, PostaviUdarciOkvir2] = useState(0);
    const [prekrsaji1, PostaviPrekrsaji1] = useState(0);
    const [prekrsaji2, PostaviPrekrsaji2] = useState(0);
    const [korner1, PostaviKorner1] = useState(0);
    const [korner2, PostaviKorner2] = useState(0);
    const [zaleda1, PostaviZaleda1] = useState(0);
    const [zaleda2, PostaviZaleda2] = useState(0);
    const [dodavanja1, PostaviDodavanja1] = useState(0);
    const [dodavanja2, PostaviDodavanja2] = useState(0);
    const [gol1, PostaviGol1] = useState([]);
    const [gol2, PostaviGol2] = useState([]);
    const [ZutiK1, PostaviZutiK1] = useState([]);
    const [ZutiK2, PostaviZutiK2] = useState([]);
    const [CrveniK1, PostaviCrveniK1] = useState([]);
    const [CrveniK2, PostaviCrveniK2] = useState([]);
    

    const resetState = () => {
      PostaviRez1(0);
      PostaviUdarci1(0);
      PostaviUdarciOkvir1(0);
      PostaviPrekrsaji1(0);
      PostaviKartonZuti1(0);
      PostaviKartonCrveni1(0);
      PostaviDodavanja1(0);
      PostaviKorner1(0);
      PostaviZaleda1(0);
      PostaviRez2(0);
      PostaviUdarci2(0);
      PostaviUdarciOkvir2(0);
      PostaviPrekrsaji2(0);
      PostaviKartonZuti2(0);
      PostaviKartonCrveni2(0);
      PostaviDodavanja2(0);
      PostaviKorner2(0);
      PostaviZaleda2(0);
      PostaviGol1([]);
      PostaviGol2([]);
      PostaviCrveniK1([]);
      PostaviCrveniK2([]);
      PostaviZutiK1([]);
      PostaviZutiK2([]);
      Restart();
    };

    return(
        <div id="Glavni">
            <Datum />
            <div id = "mainwin">
                <div id="izgled">
                <div  id="prviKlub">
                    <img className='slk' src={Hajduk} alt="Hajduk Split" width="100px" height="100px" style={{ borderRadius: '50%' }}/>
                    <Klub ime="Hajduk"></Klub>
                </div>
                <div className='plusMinus'>
                    <Tipka akcija={() => {UvecajGol([rez1, PostaviRez1], [gol1, PostaviGol1], minute); Uvecaj([udarci1, PostaviUdarci1])}} akcija1={() => UmanjiGol([rez1, PostaviRez1],[gol1, PostaviGol1])} natpis1="-" natpis2="+" rezultat={rez1}/>
                </div>
                <h2>:</h2>
                <div className='plusMinus'>
                    <Tipka akcija={() => {UvecajGol([rez2, PostaviRez2], [gol2, PostaviGol2], minute); Uvecaj([udarci2, PostaviUdarci2])}}  akcija1={() => UmanjiGol([rez2, PostaviRez2],[gol2, PostaviGol2])} natpis1="-" natpis2="+" rezultat={rez2} />
                    
                </div>
                <div id="drugiKlub">
                    <img className='slk' src={Dinamo} alt="Dinamo Zagreb" width="100px" height="100px" style={{ borderRadius: '50%' }}/>
                    <Klub ime="Dinamo"></Klub>
                </div>
                </div>
                <div id="vrime-display">
                <p >{FormatTime()}</p>
                <div id="startstop">
                    <button className="but" id="stop" onClick={Stop}>Stop</button>
                    <button className="but" id="start" onClick={Start}>Start</button>
                </div>
            </div>
            </div>
            
            <br/>
            <div id="details">
                <h2>Detalji</h2>
                <div id="comments">
                    
                    <ul>
                        {gol1.map((gol, index) => (
                            <li key={index}>{gol}' Gol⚽</li>
                        ))}
                        {CrveniK1.map((crv, index) => (
                            <li key={index}>{crv}' Crveni karton🔴</li>
                        ))}
                        {ZutiK1.map((zuti, index) => (
                            <li key={index}>{zuti}' Zuti karton⚠</li>
                        ))}
                    </ul>
                    <ul>
                        {gol2.map((gol, index) => (
                            <li key={index}>{gol}' Gol⚽</li>
                        ))}
                        {CrveniK2.map((crv, index) => (
                            <li key={index}>{crv}' Crveni karton🔴</li>
                        ))}
                        {ZutiK2.map((zuti, index) => (
                            <li key={index}>{zuti}' Zuti karton⚠</li>
                        ))}
                    </ul>
            </div>
            </div>
            
                <div >
                    <br/>
                    <div className="statistika">
                        <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([udarci1, PostaviUdarci1])} akcija1={() => Umanji([udarci1, PostaviUdarci1])} natpis1="-" natpis2="+" rezultat={udarci1}/>
                            <h3>Udarci</h3>
                            <Tipka akcija={() => Uvecaj([udarci2, PostaviUdarci2])} akcija1={() => Umanji([udarci2, PostaviUdarci2])} natpis1="-" natpis2="+" rezultat={udarci2}/>
                        </div>
                        {/* <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([udarciOkvir1, PostaviUdarciOkvir1])} akcija1={() => Umanji([udarciOkvir1, PostaviUdarciOkvir1])} natpis1="-" natpis2="+" rezultat={udarciOkvir1}/>
                            <h3>Udarci u okvir</h3>
                            <Tipka akcija={() => Uvecaj([udarciOkvir2, PostaviUdarciOkvir2])} akcija1={() => Umanji([udarciOkvir2, PostaviUdarciOkvir2])} natpis1="-" natpis2="+" rezultat={udarciOkvir2}/>
                        </div> */}
                        {/* <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([prekrsaji1, PostaviPrekrsaji1])} akcija1={() => Umanji([prekrsaji1, PostaviPrekrsaji1])} natpis1="-" natpis2="+" rezultat={prekrsaji1}/>
                            <h3>Prekrsaji</h3>
                            <Tipka akcija={() => Uvecaj([prekrsaji2, PostaviPrekrsaji2])} akcija1={() => Umanji([prekrsaji2, PostaviPrekrsaji2])} natpis1="-" natpis2="+" rezultat={prekrsaji2}/>
                        </div> */}
                        <div className="podstatistika">
                            <Tipka akcija={() => UvecajGol([kartonZuti1, PostaviKartonZuti1], [ZutiK1, PostaviZutiK1], minute)} akcija1={() => UmanjiGol([kartonZuti1, PostaviKartonZuti1], [ZutiK1, PostaviZutiK1], minute)} natpis1="-" natpis2="+" rezultat={kartonZuti1}/>
                            <h3>Zuti kartoni</h3>
                            <Tipka akcija={() => UvecajGol([kartonZuti2, PostaviKartonZuti2], [ZutiK2, PostaviZutiK2], minute)} akcija1={() => UmanjiGol([kartonZuti2, PostaviKartonZuti2], [ZutiK2, PostaviZutiK2], minute)} natpis1="-" natpis2="+" rezultat={kartonZuti2}/>
                        </div>
                        <div className="podstatistika">
                            <Tipka akcija={() => UvecajGol([kartonCrveni1, PostaviKartonCrveni1], [CrveniK1, PostaviCrveniK1], minute)} akcija1={() => UmanjiGol([kartonCrveni1, PostaviKartonCrveni1], [CrveniK1, PostaviCrveniK1], minute)} natpis1="-" natpis2="+" rezultat={kartonCrveni1}/>
                            <h3>Crveni kartoni</h3>
                            <Tipka akcija={() => UvecajGol([kartonCrveni2, PostaviKartonCrveni2], [CrveniK2, PostaviCrveniK2], minute)} akcija1={() => UmanjiGol([kartonCrveni2, PostaviKartonCrveni2], [CrveniK2, PostaviCrveniK2], minute)} natpis1="-" natpis2="+" rezultat={kartonCrveni2}/>
                        </div>
                        {/* <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([dodavanja1, PostaviDodavanja1])} akcija1={() => Umanji([dodavanja1, PostaviDodavanja1])} natpis1="-" natpis2="+" rezultat={dodavanja1}/>
                            <h3>Dodavanja</h3>
                            <Tipka akcija={() => Uvecaj([dodavanja2, PostaviDodavanja2])} akcija1={() => Umanji([dodavanja2, PostaviDodavanja2])} natpis1="-" natpis2="+" rezultat={dodavanja2}/>
                        </div>
                        <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([korner1, PostaviKorner1])} akcija1={() => Umanji([korner1, PostaviKorner1])} natpis1="-" natpis2="+" rezultat={korner1}/>
                            <h3>Korneri</h3>
                            <Tipka akcija={() => Uvecaj([korner2, PostaviKorner2])} akcija1={() => Umanji([korner2, PostaviKorner2])} natpis1="-" natpis2="+" rezultat={korner2}/>
                        </div>
                        <div className="podstatistika">
                            <Tipka akcija={() => Uvecaj([zaleda1, PostaviZaleda1])} akcija1={() => Umanji([zaleda1, PostaviZaleda1])} natpis1="-" natpis2="+" rezultat={zaleda1}/>
                            <h3>Zalede</h3>
                            <Tipka akcija={() => Uvecaj([zaleda2, PostaviZaleda2])} akcija1={() => Umanji([zaleda2, PostaviZaleda2])} natpis1="-" natpis2="+" rezultat={zaleda2}/>
                        </div> */}
                    </div>
                    <div id="krj">
                        <button id="zadano" onClick={resetState}>
                            Postavi na zadano!
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Stoperica




