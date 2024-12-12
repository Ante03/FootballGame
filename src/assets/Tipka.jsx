
import './Tipka.css'

function Tipka(props){
 
    function handleClick1(){
      props.akcija1()
    }

    function handleClick(){
      props.akcija()
    }
   
    return(
      <div className="tipkaOkvir">
        <h2>{props.rezultat}</h2>
        <p>{props.gol}</p>
        <button onClick={handleClick1} className='tipka' id="neg">{props.natpis1}</button>
        <button onClick={handleClick} className='tipka' id="poz">{props.natpis2}</button>
      </div>
    )
  }
  export default Tipka