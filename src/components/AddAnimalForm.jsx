import { useState } from 'react'
import StarRating from './StarRating'

function AddAnimalForm({ onAdd }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [rating, setRating] = useState(3)

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '') {
      return
    }

    onAdd({ name, description, image, rating })

    setName('')
    setDescription('')
    setImage('')
    setRating(3)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a new animal</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <input
        type="text"
        placeholder="Image path, e.g. /images/sloth.jpg"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <StarRating rating={rating} onChange={setRating} />

      <button type="submit">Add</button>
    </form>
  )
}

export default AddAnimalForm