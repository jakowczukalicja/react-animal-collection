function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      {animal.image && <img src={animal.image} alt={animal.name} />}
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <p>Rating: {animal.rating} / 5</p>
    </div>
  )
}

export default AnimalCard