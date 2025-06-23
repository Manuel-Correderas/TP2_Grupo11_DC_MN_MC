import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './RecetaPage.module.css' // Asegurate de crear este archivo y agregarlo

export default function RecetaPage() {
  const { id } = useParams()
  const [receta, setReceta] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(json => setReceta(json.meals?.[0]))
      .catch(err => setError(err))
  }, [id])

  if (error) return <p>Error: {error.message}</p>
  if (!receta) return <p>Cargando receta...</p>

  return (
  <div style={{ padding: '2rem' }} className="fade-in">
    <Link to="/api-recetas" style={{ textDecoration: 'none', color: '#007bff' }}>
      ← Volver
    </Link>
    <h1>{receta.strMeal}</h1>
    <h3>{receta.strCategory} • {receta.strArea}</h3>
    <img
      src={receta.strMealThumb}
      alt={receta.strMeal}
      style={{ maxWidth: '100%', borderRadius: '12px' }}
    />
    <p style={{ marginTop: '1rem' }}>{receta.strInstructions}</p>
    {receta.strYoutube && (
      <div style={{ marginTop: '1rem' }}>
        <h4>Video:</h4>
        <a href={receta.strYoutube} target="_blank" rel="noopener noreferrer">
          Ver en YouTube
        </a>
      </div>
    )}
  </div>
)

}
