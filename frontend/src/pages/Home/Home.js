import React from 'react';
import SearchTabPanel from '../../components/SearchTabPanel/SearchTabPanel';
import Card from '../../components/Card/Card';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const Home = () => {
  const accommodations = [
    {
      image: 'path/to/image1.jpg',
      title: 'Cabane dans les arbres',
      description: 'Une belle cabane dans les arbres avec vue sur la forêt.'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Yourte moderne',
      description: 'Profitez d\'une expérience unique dans cette yourte moderne.'
    }
  ];

  return (
    <HomeContainer>
      <SearchTabPanel />
      <CardsContainer>
        {accommodations.map((accommodation, index) => (
          <Card
            key={index}
            image={accommodation.image}
            title={accommodation.title}
            description={accommodation.description}
          />
        ))}
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
