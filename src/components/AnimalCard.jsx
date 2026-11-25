import StarRating from './StarRating'

function AnimalCard({ animal, onDelete, onRatingChange }) {
  return (
    <div className="animal-card">
      {animal.image && <img src={animal.image} alt={animal.name} />}
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <StarRating
        rating={animal.rating}
        onChange={(newRating) => onRatingChange(animal.id, newRating)}
      />
      <button onClick={() => onDelete(animal.id)}>Delete</button>
    </div>
  )
}

export default AnimalCard