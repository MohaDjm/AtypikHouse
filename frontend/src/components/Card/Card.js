import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.5rem 0 0;
    color: #777;
  }
`;

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
