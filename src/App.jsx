import { useState } from 'react'
import './App.css'
import animalsData from './data/animals.json'
import AnimalCard from './components/AnimalCard'

function App() {
  const [animals, setAnimals] = useState(animalsData)

  return (
    <div className="app">
      <h1>Weird Animals</h1>
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App