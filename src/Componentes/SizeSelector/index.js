import React, { useState } from 'react';

const SizeSelector = () => {
  // Estado para almacenar el valor seleccionado del tamaño
  const [selectedSize, setSelectedSize] = useState('');

  // Función para manejar cambios en la selección
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="size">
      <select
        value={selectedSize}
        onChange={handleSizeChange}
        placeholder="Tamaño"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <p>Tamaño</p>
    </div>
  );
};

export default SizeSelector;
