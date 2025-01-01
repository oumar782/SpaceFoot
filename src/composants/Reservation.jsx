import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Réservation pour: ${name}, Email: ${email}, Date: ${date}`);
  };

  return (
    <>
    <div className='bouton'>
    <button type="submit">je consulte le crenaux</button>
    <button type="submit">je paie ma reservation</button>
    <button type="submit">je consulte la validation de ma reservation</button>

    </div>
  <div className='degrade'>
    <h1>Reserver  votre espace de foot en seulement quelque clics et en toute serenite</h1>
      <div className="reservation-container">
        <h1>Faites-vous plaisir ! Réservez Votre Terrain</h1>
        <form onSubmit={handleSubmit} className="reservation-form">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
         <label htmlFor="terrainType">Type de Terrain:</label>
<select>
  <option >
    Choisissez un type
  </option>
  <option value="normal">Terrain Normal</option>
  <option value="synthetique">Terrain Synthétique</option>
</select>

          <label htmlFor="date">Date de Réservation:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">je consulte les creanux</button>
        </form>
        <div className="reservation-info">
        <p style={{ fontSize: '15px' }}>
  <span style={{ color: 'green', fontSize: '25px', textDecoration: 'underline' }}>Nb:</span>
  Pour toute question, merci de consulter le chatbot pour plus de details.
</p>


        </div>
      </div>
      </div>
    </>
  );
};

export default Reservation;