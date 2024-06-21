import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #e04e56;
  }
`;

const SearchTabPanel = () => {
  const [destination, setDestination] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [guests, setGuests] = useState(1);

  return (
    <Panel>
      <Input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Input
        type="date"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
      />
      <Input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <Input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <Button type="button">Rechercher</Button>
    </Panel>
  );
};

export default SearchTabPanel;
