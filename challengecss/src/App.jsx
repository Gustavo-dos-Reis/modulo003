
import './App.css';
import CarsDetails from './components/CarsDetails';

function App() {

  const cars = [
    {id:1,brand: "VolksWagen", color:"white", km:90.000},
    {id:2, brand: "Toyta", color:"cinza-escuro", km:75.000},
    {id:3, brand:"Fiat", color:"prata", km: 100.000}
  ]
  return(
    <div className='App.css'>
        <h1>Detalhes dos carros:</h1>
      {cars.map((car) =>
      <CarsDetails 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
      />
      )}
      <p></p>
    </div>
  )
  
}

export default App
