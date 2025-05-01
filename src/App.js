import React, { useEffect, useState } from "react";

export default function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  // Cargar datos desde archivo JSON en carpeta public
  useEffect(() => {
    fetch("/pets.json")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🐾 Veterinaria Feliz - Lista de Mascotas</h1>

      {/* Listado de mascotas */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pets.map((pet) => (
          <li
            key={pet.id}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
              cursor: "pointer",
            }}
            onClick={() => setSelectedPet(pet)}
          >
            <strong>{pet.name}</strong> ({pet.species})
            <br />
            🐶 Raza: {pet.breed}
          </li>
        ))}
      </ul>

      {/* Vista Detallada */}
      {selectedPet && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            border: "2px solid #28a745",
            borderRadius: 8,
            backgroundColor: "#eaffea",
          }}
        >
          <h2>📋 Detalle de {selectedPet.name}</h2>
          <p>
            <strong>Especie:</strong> {selectedPet.species}
          </p>
          <p>
            <strong>Raza:</strong> {selectedPet.breed}
          </p>
          <p>
            <strong>Edad:</strong> {selectedPet.age} años
          </p>
          <p>
            <strong>Dueño:</strong> {selectedPet.owner}
          </p>
          <button onClick={() => setSelectedPet(null)}>Cerrar detalle</button>
        </div>
      )}
    </div>
  );
}
