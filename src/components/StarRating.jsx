function StarRating({ rating, onChange }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className="star"
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} out of 5`}
        >
          {star <= rating ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}

export default StarRating