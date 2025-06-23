import { useEffect, useState } from 'react'
import paises from '../data/paises.json'
import './CarruselPaises.css'

export default function CarruselPaises() {
  const [startIndex, setStartIndex] = useState(0)
  const [activo, setActivo] = useState(true)
  const [busqueda, setBusqueda] = useState('')

  // Filtrar países
  const paisesFiltrados = paises.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.category.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.description.toLowerCase().includes(busqueda.toLowerCase())
  )

  // Ciclo del carrusel con países filtrados
  useEffect(() => {
    if (!activo || paisesFiltrados.length <= 3) return

    const intervalo = setInterval(() => {
      setStartIndex(prev => (prev + 3) % paisesFiltrados.length)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [activo, paisesFiltrados.length])

  const visibles = paisesFiltrados.slice(startIndex, startIndex + 3)

  return (
    <div className="carrusel-wrapper">
      <input
        type="text"
        placeholder="Buscar país, categoría o descripción..."
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value)
          setStartIndex(0) // Reiniciar carrusel al buscar
        }}
        className="carrusel-busqueda"
      />

      <div className="carrusel-container">
        {visibles.map(pais => (
          <div key={pais.id} className="carrusel-card">
            <img src={pais.image} alt={pais.title} className="carrusel-img" />
            <h2>{pais.title}</h2>
            <h4>{pais.category}</h4>
            <p>{pais.description}</p>
          </div>
        ))}
      </div>

      {paisesFiltrados.length > 3 && (
        <button className="carrusel-pause-btn" onClick={() => setActivo(!activo)}>
          {activo ? '⏸️ Pausar' : '▶️ Reanudar'}
        </button>
      )}
    </div>
  )
}
