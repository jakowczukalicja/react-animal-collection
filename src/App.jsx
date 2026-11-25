import { useState } from 'react'
import './App.css'
import animalsData from './data/animals.json'
import AnimalCard from './components/AnimalCard'

function App() {
  const [animals, setAnimals] = useState(animalsData)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('rating-high')

  const visibleAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  )

  const sortedAnimals = [...visibleAnimals].sort((a, b) => {
    if (sortBy === 'rating-high') {
      return b.rating - a.rating
    }
    if (sortBy === 'rating-low') {
      return a.rating - b.rating
    }
    return a.name.localeCompare(b.name)
  })

  return (
    <div className="app">
      <h1>Weird Animals</h1>
      <input
        type="text"
        placeholder="Search animals..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
        <option value="rating-high">Rating (highest first)</option>
        <option value="rating-low">Rating (lowest first)</option>
        <option value="name">Name (A–Z)</option>
      </select>
      <div className="animal-list">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App