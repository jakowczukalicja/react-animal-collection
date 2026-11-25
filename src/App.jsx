import { useState } from 'react'
import './App.css'
import animalsData from './data/animals.json'
import AnimalCard from './components/AnimalCard'

function App() {
  const [animals, setAnimals] = useState(animalsData)
  const [search, setSearch] = useState('')

  const visibleAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Weird Animals</h1>
      <input
        type="text"
        placeholder="Search animals..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="animal-list">
        {visibleAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App