function AnimalCard({ animal, onDelete }) {
  return (
    <div className="animal-card">
      {animal.image && <img src={animal.image} alt={animal.name} />}
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <p>Rating: {animal.rating} / 5</p>
      <button onClick={() => onDelete(animal.id)}>Delete</button>
    </div>
  )
}

export default AnimalCard